import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { ModalController, Platform } from '@ionic/angular';
import { MatomoTracker } from '@ngx-matomo/tracker';
import { TranslateService } from '@ngx-translate/core';
import config from 'capacitor.config';
import { filter, firstValueFrom, Subscription, switchMap, takeWhile } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AppIncompatabiliityReason } from 'src/app/core/features-control.types';
import { FlagsmithService } from 'src/app/core/flagsmith.service';
import { BaseSubscribeHandlerComponent } from 'src/app/shared/base-subscribe-handler.component';
import { environment } from 'src/environments/environment';
import { FeaturesControlService } from './core/features-control.service';
import { WalletService } from 'src/app/core/wallet.service';
import { QrScannerService } from 'src/app/core/qr-scanner.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends BaseSubscribeHandlerComponent implements OnInit, OnDestroy {
  appIncompatibility?: AppIncompatabiliityReason;
  isAppInCompatible = false;
  private backButtonSub: Subscription;

  constructor(
    private platform: Platform,
    public featuresControlService: FeaturesControlService,
    private flagsmithService: FlagsmithService,
    private ngZone: NgZone,
    private authenticationService: AuthenticationService,
    private router: Router,
    translate: TranslateService,
    private walletService: WalletService,
    private modalCtrl: ModalController,
    private matomo: MatomoTracker,
    private qrScannerService: QrScannerService
  ) {

    super();

    translate.setDefaultLang('en');
    translate.use('en');
    this.checkUserConsents();
    this.platform.ready()
      .then(() => firstValueFrom(this.flagsmithService.refresh()))
      .then(() => this.featuresControlService.checkVersionCompatibility());
  }

  ngOnInit(): void {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(
      10000,
      () => this.handleBackButton()
    );

    App.addListener('appStateChange', ({ isActive }) => this.onAppStateChangeasync(isActive));
    App.addListener('appUrlOpen', ({ url }) => this.onAppUrlOpen(url));
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    App.removeAllListeners();
    this.backButtonSub?.unsubscribe();
  }

  private checkUserConsents() {
    this.matomo.requireCookieConsent();
    this.matomo.requireConsent();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.authenticationService.getUserInfo().subscribe(({ user_metadata }) => {
      if (user_metadata?.pxWebCookieConsent) {
        this.matomo.setCookieConsentGiven();
      }

      if (user_metadata?.pxWebTrackingConsent) {
        this.matomo.setConsentGiven();
      }
    });
  }

  private onAppUrlOpen(url: string): void {
    const expectedUrl = `${config.appId}://${environment.auth0.domain}`;

    if (url?.startsWith(expectedUrl)) {
      if (
        url.includes('state=') &&
        (url.includes('error=') || url.includes('code='))
      ) {
        this.handleOnLogin(url);
      } else {
        this.handleOnLogout(url);
      }
    }
  }

  private handleOnLogin(url: string): void {
    this.ngZone.run(() => {
      this.authenticationService.auth0
        .handleRedirectCallback(url)
        .pipe(
          switchMap(() => this.authenticationService.auth0.isAuthenticated$),
          /**
           * Because of a bug in the auth0 SDK
           * isAuthenticated is not true immediatly after login, so we stay subscribed
           * to it untill the value is true, then redirect to /tabs
           * */
          takeWhile(isAuthenticated => !isAuthenticated, true),
          filter(data => !!data)
        )
        .subscribe(() => {
          this.checkUserConsents();
          if (this.featuresControlService.deviceInfo.platform === 'ios') {
            Browser.close();
          }

          this.router.navigateByUrl('/tabs')
            .then(() => {
              this.walletService.hasWallet()
                .subscribe((hasWallet: boolean) => {
                  if (!hasWallet) {
                    return this.walletService.showCreateWalletNotification();
                  }
                });
            });
        });
    });
  }

  private handleOnLogout(url: string): void {
    console.log('Returned url without state/code/error', url);

    if (this.featuresControlService.deviceInfo.platform === 'ios') {
      Browser.close();
    }

    this.ngZone.run(() => {
      console.log('Navigating to /tabs');
      this.router.navigateByUrl('/login');
    });
  }

  private async onAppStateChangeasync(isActive: boolean): Promise<void> {
    console.log('App state changed. Is active?', isActive);

    if (isActive) {
      await firstValueFrom(this.flagsmithService.refresh());

      await this.featuresControlService.checkVersionCompatibility();
    }
  }

  private async handleBackButton(): Promise<void> {
    if (this.qrScannerService.isStarted()) {
      this.qrScannerService.stopScan();
    } else {
      const isModalOpened = await this.modalCtrl.getTop();

      if (isModalOpened) {
        this.modalCtrl.dismiss();
      } else if (this.router.url === '/tabs/warehouse') {
        App.exitApp();
      } else if (this.router.url === '/login') {
        App.exitApp();
      } else {
        this.router.navigateByUrl('tabs/warehouse');
      }
    }
  }
}
