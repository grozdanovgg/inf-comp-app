import { Injectable } from '@angular/core';
import { App, AppInfo } from '@capacitor/app';
import { Device, DeviceInfo } from '@capacitor/device';
import { ConnectionStatus, Network } from '@capacitor/network';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { compare } from 'compare-versions';
import { AppIncompatabiliityReason } from 'src/app/core/features-control.types';
import { FlagsmithService } from 'src/app/core/flagsmith.service';
import { Flags, SupportedVersions } from 'src/app/models/flagsmith-types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturesControlService {
  readonly messageMap: Map<AppIncompatabiliityReason, string> = new Map<AppIncompatabiliityReason, string>([
    [AppIncompatabiliityReason.appDisabled, this.translate.instant('appIncompatabiliity.AppDisabled')],
    [AppIncompatabiliityReason.operatingSystemNotSupported, this.translate.instant('appIncompatabiliity.operatingSystemNotSupported')],
    [AppIncompatabiliityReason.appVersionNotSupported, this.translate.instant('appIncompatabiliity.appVersionNotSupported')],
    [AppIncompatabiliityReason.noInternet, this.translate.instant('appIncompatabiliity.noInternet')],
    [AppIncompatabiliityReason.flagsmithUnreachable, this.translate.instant('appIncompatabiliity.flagsmithUnreachable')],
    [AppIncompatabiliityReason.platformNotSupported, this.translate.instant('appIncompatabiliity.platformNotSupported')]
  ]);
  versionCheckInProgress = false;
  currentAppIncompatibility?: AppIncompatabiliityReason;

  deviceInfo?: DeviceInfo;
  appInfo?: AppInfo;
  supportedVersions?: SupportedVersions;

  constructor(
    private flagsmithService: FlagsmithService,
    private alertController: AlertController,
    private translate: TranslateService) {

    Network.addListener('networkStatusChange', this.networkConnectionListener.bind(this));
  }

  async checkVersionCompatibility(): Promise<void> {
    this.versionCheckInProgress = true;
    // eslint-disable-next-line max-len
    this.supportedVersions = this.flagsmithService
      .getFlag<{ supportedVersions: SupportedVersions }>(Flags.companionApp)
      .feature_state_value
      .supportedVersions;

    console.log('Check for supported versions: ', this.supportedVersions);

    if (!this.deviceInfo) {
      this.deviceInfo = await Device.getInfo();
    }

    if (this.deviceInfo.platform === 'ios' || this.deviceInfo.platform === 'android') {
      this.appInfo = await App.getInfo();
    }

    /**
     * Skip app compatibility checks in browser mode
     */
    if (!environment.mobile) {
      console.log('Browser environment detected, skipping app versions compatibility checks');

      this.versionCheckInProgress = false;
      return;
    }

    /**
     * Mind the order of this conditions, because we show only the most basic reason first
     * and then stop checking
     */
    if (!this.isPlatformSupported()) {
      this.setIncopatability(AppIncompatabiliityReason.platformNotSupported);

      return;
    }

    if (!this.isOsVersionSupported()) {
      this.setIncopatability(AppIncompatabiliityReason.operatingSystemNotSupported);

      return;
    }

    if (!this.isAppVersionSupported()) {
      this.setIncopatability(AppIncompatabiliityReason.appVersionNotSupported);

      return;
    }

    if (!this.isAppEnabled()) {
      this.setIncopatability(AppIncompatabiliityReason.appDisabled);

      return;
    }

    if (!this.flagsmithAvailable()) {
      this.setIncopatability(AppIncompatabiliityReason.flagsmithUnreachable);

      return;
    }

    this.setIncopatability(null);
  }

  private async setIncopatability(appIncompatabiliityReason: AppIncompatabiliityReason): Promise<void> {
    console.log('setting app incompatibility reason', appIncompatabiliityReason);

    this.versionCheckInProgress = false;
    this.currentAppIncompatibility = appIncompatabiliityReason;

    try {
      await this.alertController.dismiss('incompatability-alert');
    } catch (err) { }

    if (this.currentAppIncompatibility) {
      const alert = await this.alertController.create({
        id: 'incompatability-alert',
        subHeader: this.messageMap.get(this.currentAppIncompatibility),
        cssClass: 'incompatability-alert',
        backdropDismiss: false,
        keyboardClose: false
      });

      return await alert.present();
    }
  }

  private isPlatformSupported(): boolean {
    console.log('checking isPlatformSupported');

    return this.deviceInfo.platform === 'ios' || this.deviceInfo.platform === 'android';
  }

  private isOsVersionSupported(): boolean {
    console.log('checking isOsVersionSupported');
    console.log('supported versions', this.supportedVersions);

    if (this.deviceInfo?.operatingSystem === 'ios') {
      console.log('ios operating system detected');
      return this.isVersionCompatible(this.deviceInfo.osVersion, this.supportedVersions?.ios?.min, this.supportedVersions?.ios?.max);

    } else if (this.deviceInfo?.operatingSystem === 'android') {
      console.log('android operating system detected', this.deviceInfo.osVersion);

      const versionTextArray = this.deviceInfo.osVersion.split(' ');

      // Cover the cases if the osVersion is "Andoid xx" or just "xx".
      const androidVersion = versionTextArray[1] || versionTextArray[0];

      return this.isVersionCompatible(androidVersion, this.supportedVersions?.android?.min, this.supportedVersions?.android?.max);
    }

    return false;
  }

  private isAppVersionSupported(): boolean {
    console.log('checking isAppVersionSupported', this.appInfo?.version);

    if (this.appInfo?.version) {
      return this.isVersionCompatible(this.appInfo.version, this.supportedVersions?.app?.min, this.supportedVersions?.app?.max);
    }

    return false;
  }

  private isAppEnabled(): boolean {
    console.log('checking isAppEnabled');

    return this.flagsmithService.getFlag(Flags.companionApp).enabled;
  }

  private flagsmithAvailable(): boolean {
    console.log('checking flagsmithAvailable');

    if (this.flagsmithService.error) {
      return false;
    }
    return true;
  }

  private networkConnectionListener(status: ConnectionStatus): void {
    console.log('Network status changed', status);
    if (status.connected) {
      if (this.currentAppIncompatibility === AppIncompatabiliityReason.noInternet) {
        this.setIncopatability(null);
      }
    } else {
      this.setIncopatability(AppIncompatabiliityReason.noInternet);
    }
  }

  private isVersionCompatible(version: string, min: string, max: string): boolean {
    if (min && max) {
      return compare(version, min, '>=') && compare(version, max, '<=');
    } else if (min) {
      return compare(version, min, '>=');
    } else if (max) {
      return compare(version, max, '<=');
    }

    return false;
  }
}
