/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BalanceInfo } from '@pixelmatic/ewk';
import { DateTime } from 'luxon';
import { forkJoin, map, Observable, switchMap, take } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { ContentService } from 'src/app/core/content.service';
import { NftService } from 'src/app/core/nft.service';
import { Asset } from 'src/app/models/asset';
import { Ship } from 'src/app/models/ship';
import { ShipTemplate } from 'src/app/models/ship-template';
import { WalletService } from 'src/app/core/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private apiService: ApiService,
    private contentService: ContentService,
    private nftService: NftService,
    private walletService: WalletService
  ) { }

  getShipTemplate(assetID: string): Observable<Ship> {

    return this.contentService.getProductsDetail([assetID.slice(0, 14)])
      .pipe(map(shipData => Ship.fromShipTemplate(shipData[0], assetID.slice(-8))));
  }

  getShips(): Observable<Ship[]> {
    return forkJoin({
      inventoryShips: this.getInventoryShips(),
      walletShips: this.getWalletShips()
    })
      .pipe(
        map(({ inventoryShips, walletShips }) => [...inventoryShips, ...walletShips]
          .sort((a, b) => b.UpdatedAt - a.UpdatedAt)));
  }

  private getInventoryShips(): Observable<Ship[]> {
    return this.apiService.get<{ data: { assets: Asset[] } }>('ships')
      .pipe(
        map(response => response?.data?.assets || []),
        switchMap(assets => this.hidrateShipData(assets)),
        take(1)
      );
  }


  private getWalletShips(): Observable<Ship[]> {
    return this.walletService.getBalances()
      .pipe(
        map(balances => balances.filter(balance => balance.isNFT)),
        switchMap((balances: BalanceInfo[]) => this.nftService.getAssetsByNFTIds(balances.map(balance => balance.assetId))),
        switchMap((assets) => this.contentService
          .getProductsDetail<ShipTemplate>(this.mapAssetsToExternalIds(assets))
          .pipe(map(shipTemplates => shipTemplates.map((template, i) => {
            const ship = Ship.fromShipTemplate(template, assets[i].asset_id.slice(-8));
            ship.UpdatedAt = DateTime.fromISO(assets[i].updated_at, { zone: 'utc' }).toMillis() * 1000000;

            return ship;
          })))),
        take(1)
      );
  }

  private hidrateShipData(assets: Asset[]): Observable<Ship[]> {
    // There is a limit in the string URL (for Chrome ~32k characters),
    // so if we need to handle more than ~1500ships, we should consider updating this method.
    // https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
    return this.contentService.getProductsDetail<ShipTemplate>(this.mapAssetsToExternalIds(assets))
      .pipe(
        map(shipTemplates => this.mapAssetsToShips(assets, shipTemplates)),
        switchMap(ships => this.nftService.addNFTAssetIDToShips(ships)),
        take(1)
      );
  }

  private mapAssetsToExternalIds(assets: Asset[]): string[] {
    return assets.map(asset => asset?.asset_id.slice(0, Ship.SHIP_ID_LENGTH));
  }

  private mapAssetsToShips(assets: Asset[], shipTemplates: ShipTemplate[]): Ship[] {
    return assets
      .map(asset => {
        const template: ShipTemplate | undefined =
          shipTemplates.find(t => t.external_id === asset.asset_id.slice(0, Ship.SHIP_ID_LENGTH));
        if (template) {

          const seconds = asset.owner_updated_at?.seconds.low;
          const nanos = asset.owner_updated_at?.nanos;
          const updatedAt = +`${seconds}${nanos}`;

          return Ship.fromShipTemplate(template, asset.asset_id.slice(-8), updatedAt);
        }
        console.error(`The asset with id ${asset.asset_id} does not match with valid template and cannot be shown`);
      })
      .filter(ship => Boolean(ship));
  }
}
