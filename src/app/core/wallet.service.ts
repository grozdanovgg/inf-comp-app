import { Injectable } from '@angular/core';
import { BalanceInfo, ExoWalletKit } from '@pixelmatic/ewk';
import { NetworkString } from '@pixelmatic/ldk';
import { forkJoin, from, map, Observable, shareReplay, switchMap, take } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ModalButtonStyle, ModalSize } from 'src/app/shared/modal/modal.types';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private exoWalletKit$: Observable<ExoWalletKit>;

  constructor(private authenticationService: AuthenticationService,
              private modalService: ModalService
  ) {
  }

  getINFBalance(): Observable<number> {
    return this.getBalances()
      .pipe(
        map(balances => balances.find(balance => balance.ticker === 'INF')?.balance ?? 0),
        take(1));
  }

  getLBTCBalance(): Observable<number> {
    return this.getBalances()
      .pipe(
        map(balances => balances.find(balance => balance.ticker === 'L-BTC')?.balance ?? 0),
        take(1));
  }

  hasWallet(): Observable<boolean> {
    return this.getExoWalletKit()
      .pipe(
        switchMap(ewk => ewk.hasWallet()),
        take(1));
  }

  getBalances(): Observable<BalanceInfo[]> {
    return this.getExoWalletKit()
      .pipe(
        switchMap(ewk => from(ewk.getBalances()
          .then(balances => {
            console.log(balances);

            return balances;
          }))),
        take(1));
  }

  showCreateWalletNotification(): Observable<any> {
    return this.modalService.openNotification({
      title: 'settings.createWalletPopUp.title',
      content: ['settings.createWalletPopUp.descriptionPart1', 'settings.createWalletPopUp.descriptionPart2'],
      buttonText: 'settings.createWalletPopUp.closeBtn',
      buttonStyle: ModalButtonStyle.outline
    }, ModalSize.m);
  };

  setWalletPrivateKey(key: string): Observable<void> {
    return from(Preferences.set({
      key: 'walletPrivateKey',
      value: key
    }));
  }

  getWalletPrivateKey(): Observable<string | null> {
    return from(Preferences.get({ key: 'walletPrivateKey' }))
      .pipe(map(getResult => getResult.value));
  }

  private getExoWalletKit(): Observable<ExoWalletKit> {
    if (!this.exoWalletKit$) {
      this.exoWalletKit$ = forkJoin({
        userInfo: this.authenticationService.getUserInfo(),
        token: this.authenticationService.auth0.getAccessTokenSilently()
      }).pipe(
        map(({ userInfo, token }) => new ExoWalletKit({
          esploraURL: environment.walletEsploraURL,
          authConfig: {
            managementAPIUrl: `${environment.auth0.domain}/`
          },
          walletServiceHost: environment.walletServiceHost,
          userId: userInfo.user_id,
          network: environment.network as NetworkString,
          builtInAssets: environment.builtInAssets,
          getAccessToken: () => token
        })),
        take(1),
        shareReplay(1)
      );
    }

    return this.exoWalletKit$;
  }
}
