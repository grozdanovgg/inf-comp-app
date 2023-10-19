import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';
import { NFTAsset } from 'src/app/models/nft-asset';
import { Ship } from 'src/app/models/ship';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private http: HttpClient
  ) { }

  addNFTAssetIDToShips(ships: Ship[]): Observable<Ship[]> {
    if(ships.length) {
      return this.getNFTAssetsByIds(ships.map(ship => ship.assetId))
        .pipe(
          map((nftAssets: NFTAsset[]) => ships.map((ship, i) => {
            const nft = nftAssets.find(nftAsset => nftAsset.asset_id === ship.assetId);

            return new Ship({
              ...ship,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              NFTAssetID: nft?.nft_asset_id,
            });
          })),
          take(1)
        );
    }

    return of(ships);
  }

  getAssetsByNFTIds(nftAssetIds: string[]): Observable<NFTAsset[]> {
    if (nftAssetIds.length === 0) {
      return of([]);
    }

    return this.http
      .post<NFTAsset[]>(
        `${environment.nftServiceBaseURL}/assets/specific/multiple`,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        nftAssetIds.map(nftAssetId => ({ nft_asset_id: nftAssetId }))
      );
  }

  private getNFTAssetsByIds(assetIds: string[]): Observable<NFTAsset[]> {
    return this.http.post<NFTAsset[]>(`${environment.nftServiceBaseURL}/items/find`, assetIds);
  }
}
