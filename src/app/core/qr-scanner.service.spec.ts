import { TestBed } from '@angular/core/testing';
import * as BarcodeScannerModule from '@capacitor-community/barcode-scanner';

import { QrScannerService } from './qr-scanner.service';

describe('QrScannerService', () => {
  let service: QrScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    // @ts-ignore
    expect(service.started).toBeFalse();
  });

  describe('startScan()', () => {
    let startScanSpy;
    let showBackgroundSpy;
    let hideBackgroundSpy;

    beforeEach(() => {
      // @ts-ignore
      spyOn(service, 'checkUserPermission').and.returnValue(true);
      startScanSpy = spyOn(BarcodeScannerModule.BarcodeScanner, 'startScan');
      showBackgroundSpy = spyOn(BarcodeScannerModule.BarcodeScanner, 'showBackground');
      hideBackgroundSpy = spyOn(BarcodeScannerModule.BarcodeScanner, 'hideBackground');

      startScanSpy.and.returnValue(Promise.resolve({ hasContent: true, content: 'foo-content' }));
      hideBackgroundSpy.and.returnValue(Promise.resolve());
      showBackgroundSpy.and.returnValue(Promise.resolve());
    });

    it('should set started to true', () => {
      // @ts-ignore
      expect(service.started).toBeFalse();

      service.startScan();

      // @ts-ignore
      expect(service.started).toBeTrue();
    });

    it('should call checkUserPermission()', () => {
      service.startScan();

      // @ts-ignore
      expect(service.checkUserPermission).toHaveBeenCalledOnceWith();
    });

    it('should set started to false finally', (done) => {
      service.startScan()
        .finally(() => {
          // @ts-ignore
          expect(service.started).toBeFalse();
          done();
        });
    });
  });

  describe('stopScan()', () => {
    it('should set started to false', () => {
      // @ts-ignore
      service.started = true;

      service.stopScan();

      // @ts-ignore
      expect(service.started).toBeFalse();
    });
  });

  describe('isStarted()', () => {
    it('should return true if this.started is true', () => {
      // @ts-ignore
      service.started = true;

      expect(service.isStarted()).toBeTrue();
    });

    it('should return false if this.started is false', () => {
      // @ts-ignore
      service.started = false;

      expect(service.isStarted()).toBeFalse();
    });
  });

  describe('checkUserPermission()', () => {
    beforeEach(() => {
      // @ts-ignore
      spyOn(service, 'softCheckUserPermission');
      // @ts-ignore
      spyOn(service, 'forceCheckUserPermission');
    });

    it('should return true when softCheckUserPermission returns true', (done) => {
      // @ts-ignore
      service.softCheckUserPermission.and.returnValue(Promise.resolve(true));
      // @ts-ignore
      service.forceCheckUserPermission.and.returnValue(Promise.resolve(false));

      // @ts-ignore
      service.checkUserPermission()
        .then((result) => {
          expect(result).toBeTrue();
          done();
        });
    });

    it('should return true when forceCheckUserPermission returns true', (done) => {
      // @ts-ignore
      service.softCheckUserPermission.and.returnValue(Promise.resolve(false));
      // @ts-ignore
      service.forceCheckUserPermission.and.returnValue(Promise.resolve(true));

      // @ts-ignore
      service.checkUserPermission()
        .then((result) => {
          expect(result).toBeTrue();
          done();
        });
    });

    it('should return true when forceCheckUserPermission and softCheckUserPermission returns true', (done) => {
      // @ts-ignore
      service.softCheckUserPermission.and.returnValue(Promise.resolve(false));
      // @ts-ignore
      service.forceCheckUserPermission.and.returnValue(Promise.resolve(true));

      // @ts-ignore
      service.checkUserPermission()
        .then((result) => {
          expect(result).toBeTrue();
          done();
        });
    });

    it('should return false when forceCheckUserPermission and softCheckUserPermission returns false', (done) => {
      // @ts-ignore
      service.softCheckUserPermission.and.returnValue(Promise.resolve(false));
      // @ts-ignore
      service.forceCheckUserPermission.and.returnValue(Promise.resolve(false));

      // @ts-ignore
      service.checkUserPermission()
        .then((result) => {
          expect(result).toBeFalse();
          done();
        });
    });
  });
});
