/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppInfo } from '@capacitor/app';
import { DeviceInfo } from '@capacitor/device';
import { ConnectionStatus } from '@capacitor/network';
import { AlertController } from '@ionic/angular';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppIncompatabiliityReason } from 'src/app/core/features-control.types';
import { FlagsmithService } from 'src/app/core/flagsmith.service';
import { Flag, SupportedVersions } from 'src/app/models/flagsmith-types';
import { FeaturesControlService } from './features-control.service';


describe('FeaturesControlService', () => {
  let service: FeaturesControlService;
  let flagsmithServiceSpy: jasmine.SpyObj<FlagsmithService>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let alertSpy: jasmine.SpyObj<HTMLIonAlertElement>;

  beforeEach(() => {
    flagsmithServiceSpy = jasmine.createSpyObj('flagsmithService', ['getFlag']);
    alertControllerSpy = jasmine.createSpyObj('alertController', ['dismiss', 'create']);
    alertSpy = jasmine.createSpyObj('alert', ['present']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: FlagsmithService, useValue: flagsmithServiceSpy },
        { provide: AlertController, useValue: alertControllerSpy }
      ]
    });
    service = TestBed.inject(FeaturesControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('checkVersionCompatibility()', () => {
    let companionFlag: Flag<{ supportedVersions: SupportedVersions }>;
    let deviceInfo: DeviceInfo;

    beforeEach(() => {
      companionFlag = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        feature_state_value: {
          supportedVersions: {
            app: {
              min: '0.0.1'
            }
          }
        }
      } as Flag<{ supportedVersions: SupportedVersions }>;

      deviceInfo = {
        platform: 'ios',
        osVersion: '11.0.0'
      } as DeviceInfo;

      flagsmithServiceSpy.getFlag.and.returnValue(companionFlag);
    });

    it('initiate info for further checks', async () => {
      await service.checkVersionCompatibility();

      expect(service.supportedVersions).toEqual(companionFlag.feature_state_value.supportedVersions);
      expect(service.deviceInfo).toEqual(jasmine.objectContaining({
        platform: jasmine.any(String),
        osVersion: jasmine.any(String)
      }));
    });
  });

  describe('setIncopatability()', () => {
    let appIncompatabiliityReason;

    beforeEach(() => {
      appIncompatabiliityReason = AppIncompatabiliityReason.appDisabled;

      alertControllerSpy.create.and.returnValue(Promise.resolve(alertSpy));
      alertControllerSpy.dismiss.and.returnValue(Promise.resolve(true));
    });

    it('set the flags to the passed argument', async () => {
      await service['setIncopatability'](appIncompatabiliityReason);

      expect(service.versionCheckInProgress).toBeFalse();
      expect(service.currentAppIncompatibility).toBe(AppIncompatabiliityReason.appDisabled);
    });

    it('should try to call alertController.dismiss() and then alertController.create()', async () => {
      await service['setIncopatability'](appIncompatabiliityReason);

      expect(alertControllerSpy.dismiss).toHaveBeenCalledOnceWith('incompatability-alert');
      expect(alertControllerSpy.create).toHaveBeenCalledOnceWith({
        id: 'incompatability-alert',
        subHeader: service.messageMap.get(appIncompatabiliityReason),
        cssClass: 'incompatability-alert',
        backdropDismiss: false,
        keyboardClose: false
      });
      expect(alertSpy.present).toHaveBeenCalledOnceWith();
    });

    it('should not fail when alertController.dismiss() throws error, and then and then alertController.create', async () => {
      alertControllerSpy.dismiss.and.throwError('error');
      await service['setIncopatability'](appIncompatabiliityReason);

      expect(alertControllerSpy.dismiss).toHaveBeenCalledOnceWith('incompatability-alert');
      expect(alertControllerSpy.create).toHaveBeenCalledOnceWith({
        id: 'incompatability-alert',
        subHeader: service.messageMap.get(appIncompatabiliityReason),
        cssClass: 'incompatability-alert',
        backdropDismiss: false,
        keyboardClose: false
      });
      expect(alertSpy.present).toHaveBeenCalledOnceWith();
    });

    it('should not call .create if the currentAppIncompatibility is null', async () => {
      await service['setIncopatability'](null);

      expect(alertControllerSpy.dismiss).toHaveBeenCalledOnceWith('incompatability-alert');
      expect(alertControllerSpy.create).not.toHaveBeenCalled();
    });
  });

  describe('isPlatformSupported()', () => {
    it('should return true if the platform is ios', () => {
      service.deviceInfo = {
        platform: 'ios'
      } as DeviceInfo;

      const result = service['isPlatformSupported']();

      expect(result).toBeTrue();
    });

    it('should return true if the platform is android', () => {
      service.deviceInfo = {
        platform: 'android'
      } as DeviceInfo;

      const result = service['isPlatformSupported']();

      expect(result).toBeTrue();
    });

    it('should return false if the platform is neither ios nor android', () => {
      service.deviceInfo = {
        platform: 'foo'
      } as unknown as DeviceInfo;

      const result = service['isPlatformSupported']();

      expect(result).toBeFalse();
    });
  });

  describe('isOsVersionSupported()', () => {
    let isVersionCompatibleSpy;

    beforeEach(() => {
      isVersionCompatibleSpy = spyOn(service, 'isVersionCompatible' as never);
    });

    it('should return false if the operatingSystem is neither ios nor android', () => {
      service.deviceInfo = {
        operatingSystem: 'foo'
      } as unknown as DeviceInfo;

      const result = service['isOsVersionSupported']();

      expect(isVersionCompatibleSpy).not.toHaveBeenCalled();
      expect(result).toBeFalse();
    });

    describe('if the OS is iOS', () => {
      beforeEach(() => {
        service.deviceInfo = {
          operatingSystem: 'ios'
        } as DeviceInfo;

        service.supportedVersions = {
          ios: {
            min: '10.0.0',
            max: '12.0.0'
          }
        } as SupportedVersions;
      });

      it('should return true if the device version satisfies the supportedVersions.ios requirements', () => {
        isVersionCompatibleSpy.and.returnValue(true);
        service.deviceInfo.osVersion = '11.0.0';

        const result = service['isOsVersionSupported']();

        expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('11.0.0', '10.0.0', '12.0.0');
        expect(result).toBeTrue();
      });


      it('should return false if the device version does not satisfies the supportedVersions.ios requirements', () => {
        isVersionCompatibleSpy.and.returnValue(false);
        service.deviceInfo.osVersion = '12.1.0';

        const result = service['isOsVersionSupported']();

        expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('12.1.0', '10.0.0', '12.0.0');
        expect(result).toBeFalse();
      });
    });

    describe('if the OS is Android', () => {
      beforeEach(() => {
        service.deviceInfo = {
          operatingSystem: 'android'
        } as DeviceInfo;

        service.supportedVersions = {
          android: {
            min: '7'
          }
        } as SupportedVersions;
      });

      it('should return true if the device version satisfies the supportedVersions.ios requirements', () => {
        isVersionCompatibleSpy.and.returnValue(true);
        service.deviceInfo.osVersion = 'Android 7.1';

        const result = service['isOsVersionSupported']();

        expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('7.1', '7', undefined);
        expect(result).toBeTrue();
      });


      it('should return false if the device version does not satisfies the supportedVersions.ios requirements', () => {
        isVersionCompatibleSpy.and.returnValue(false);
        service.deviceInfo.osVersion = 'Android 6';

        const result = service['isOsVersionSupported']();

        expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('6', '7', undefined);
        expect(result).toBeFalse();
      });
    });
  });

  describe('isAppVersionSupported()', () => {
    let isVersionCompatibleSpy;

    beforeEach(() => {
      console.log('foo');
      isVersionCompatibleSpy = spyOn(service, 'isVersionCompatible' as never);


    });

    it('return false if the appInfo is undefined', () => {
      service.appInfo = undefined;

      const result = service['isAppVersionSupported']();

      expect(result).toBeFalse();
    });

    it('should return false if the appInfo.version is undefined', () => {
      service.appInfo = { version: undefined } as AppInfo;

      const result = service['isAppVersionSupported']();

      expect(result).toBeFalse();
    });

    it('should return true if appInfo.version is defined and isVersionCompatible() returns true', () => {
      isVersionCompatibleSpy.and.returnValue(true);
      service.appInfo = { version: '2.0.0' } as AppInfo;
      service.supportedVersions = {
        app: {
          min: '1.0.0',
          max: '3.0.0'
        }
      } as SupportedVersions;

      const result = service['isAppVersionSupported']();

      expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('2.0.0', '1.0.0', '3.0.0');
      expect(result).toBeTrue();
    });

    it('should return false if appInfo.version is defined and isVersionCompatible() returns false', () => {
      isVersionCompatibleSpy.and.returnValue(false);
      service.appInfo = { version: '2.0.0' } as AppInfo;
      service.supportedVersions = {
        app: {
          min: '1.0.0',
          max: '3.0.0'
        }
      } as SupportedVersions;

      const result = service['isAppVersionSupported']();

      expect(isVersionCompatibleSpy).toHaveBeenCalledOnceWith('2.0.0', '1.0.0', '3.0.0');
      expect(result).toBeFalse();
    });
  });

  describe('isAppEnabled()', () => {
    let companionFlag;

    beforeEach(() => {
      companionFlag = {
        enabled: true
      };
      flagsmithServiceSpy.getFlag.and.returnValue(companionFlag);

    });

    it('should return true if the flag feature is enabled', () => {
      companionFlag.enabled = true;

      const result = service['isAppEnabled']();

      expect(result).toBeTrue();
    });

    it('should return false if the flag feature is disabled', () => {
      companionFlag.enabled = false;

      const result = service['isAppEnabled']();

      expect(result).toBeFalse();
    });
  });

  describe('flagsmithAvailable()', () => {
    it('should return false if the flagsmithService has error', () => {
      service['flagsmithService'].error = new Error();

      const result = service['flagsmithAvailable']();

      expect(result).toBeFalse();
    });

    it('should return true if the flagsmithService has no error', () => {
      service['flagsmithService'].error = undefined;

      const result = service['flagsmithAvailable']();

      expect(result).toBeTrue();
    });
  });

  describe('networkConnectionListener()', () => {
    beforeEach(() => {
      spyOn(service, 'setIncopatability' as never);
    });

    it('should set incompatibility if there is no network connection', () => {
      const status: ConnectionStatus = {
        connected: false,
      } as ConnectionStatus;

      service['networkConnectionListener'](status);

      expect(service['setIncopatability']).toHaveBeenCalledOnceWith(AppIncompatabiliityReason.noInternet);
    });

    it('should remove the incompatibility if there is network connection if the network connection was restored', () => {
      service.currentAppIncompatibility = AppIncompatabiliityReason.noInternet;

      const status: ConnectionStatus = {
        connected: true,
      } as ConnectionStatus;

      service['networkConnectionListener'](status);

      expect(service['setIncopatability']).toHaveBeenCalledOnceWith(null);
    });

    it('should not do anything if there is a connection now, and there was no incompatibility set before', () => {
      service.currentAppIncompatibility = undefined;

      const status: ConnectionStatus = {
        connected: true,
      } as ConnectionStatus;

      service['networkConnectionListener'](status);

      expect(service['setIncopatability']).not.toHaveBeenCalled();
    });
  });

  describe('isVersionCompatible()', () => {
    it('should return true if the versioin is bigger than the min and lower than the max', () => {
      const version = '2.0.0';
      const min = '1.0.0';
      const max = '3.3.3';

      const result = service['isVersionCompatible'](version, min, max);

      expect(result).toBeTrue();
    });

    it('should return true if the version is bigger than the min', () => {
      const version = '2.0.0';
      const min = '1.0.0';
      const max = undefined;

      const result = service['isVersionCompatible'](version, min, max);

      expect(result).toBeTrue();
    });


    it('should return true if the version is lower than the max', () => {
      const version = '2.0.0';
      const min = undefined;
      const max = '3.0.0';

      const result = service['isVersionCompatible'](version, min, max);

      expect(result).toBeTrue();
    });


    it('should return false if the version is lower than the min', () => {
      const version = '2.0.0';
      const min = '2.1.0';
      const max = '3.0.0';

      const result = service['isVersionCompatible'](version, min, max);

      expect(result).toBeFalse();
    });


    it('should return false if the version is higher than the max', () => {
      const version = '3.1.0';
      const min = '2.0.0';
      const max = '3.0.0';

      const result = service['isVersionCompatible'](version, min, max);

      expect(result).toBeFalse();
    });
  });
});
