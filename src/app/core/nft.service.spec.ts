import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Ship } from 'src/app/models/ship';
import { environment } from 'src/environments/environment';
import { NftService } from './nft.service';

describe('NftService', () => {
  let service: NftService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(NftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addNFTAssetIDToShips()', () => {
    let rawShips;
    let nftAssets;

    beforeEach(() => {
      rawShips = [
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '012345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'abcdefgh'
        }),
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '112345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'bbcdefgh'
        })
      ];

      nftAssets = [
        {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          asset_id: '012345678901234abcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          nft_asset_id: 'foo-nft-id-1'
        },
        {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          asset_id: '112345678901234bbcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          nft_asset_id: 'foo-nft-id-2'
        }
      ];

      // @ts-ignore
      spyOn(service, 'getNFTAssetsByIds');
      // @ts-ignore
      service.getNFTAssetsByIds.and.returnValue(of(nftAssets));
    });

    it('should add NFTAssetID property to the ships', (done) => {
      const expectedShips = [
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '012345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'abcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          NFTAssetID: 'foo-nft-id-1'
        }),
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '112345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'bbcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          NFTAssetID: 'foo-nft-id-2'
        })
      ];

      service.addNFTAssetIDToShips(rawShips)
        .subscribe(ships => {
          expect(ships).toEqual(expectedShips);
          // @ts-ignore
          expect(service.getNFTAssetsByIds).toHaveBeenCalledOnceWith([
            '012345678901234abcdefgh',
            '112345678901234bbcdefgh'
          ]);
          done();
        });
    });

    it('should add NFTAssetID only to the ships that are in the result of the getNFTAssetsByIds()', (done) => {
      // @ts-ignore
      service.getNFTAssetsByIds.and.returnValue(of([nftAssets[0]]));

      const expectedShips = [
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '012345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'abcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          NFTAssetID: 'foo-nft-id-1'
        }),
        new Ship({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          ShipID: '112345678901234',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          InstanceID: 'bbcdefgh',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          NFTAssetID: undefined
        })
      ];

      service.addNFTAssetIDToShips(rawShips)
        .subscribe(ships => {
          expect(ships).toEqual(expectedShips);
          // @ts-ignore
          expect(service.getNFTAssetsByIds).toHaveBeenCalledOnceWith([
            '012345678901234abcdefgh',
            '112345678901234bbcdefgh'
          ]);
          done();
        });
    });
  });

  describe('getAssetsByNFTIds()', () => {
    let returnedNftAssets;

    beforeEach(() => {
      returnedNftAssets = [
        // eslint-disable-next-line @typescript-eslint/naming-convention
        { asset_id: 'foo-asset-id' }
      ];

      // @ts-ignore
      spyOn(service.http, 'post').and.returnValue(of(returnedNftAssets));
    });

    it('should return an empty list if the nftAssetIds.length is 0', (done) => {
      const nftAssetIds = [];

      service.getAssetsByNFTIds(nftAssetIds)
        .subscribe(nftAssets => {
          expect(nftAssets).toEqual([]);
          // @ts-ignore
          expect(service.http.post).not.toHaveBeenCalled();
          done();
        });
    });

    it('should call http.post with correct parameters', (done) => {
      const nftAssetIds = ['nft-asset-id-1'];

      service.getAssetsByNFTIds(nftAssetIds)
        .subscribe(nftAssets => {
          expect(nftAssets).toEqual(returnedNftAssets);
          // @ts-ignore
          expect(service.http.post).toHaveBeenCalledOnceWith(
            `${environment.nftServiceBaseURL}/assets/specific/multiple`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            [{ nft_asset_id: 'nft-asset-id-1' }]
          );
          done();
        });
    });
  });
});
