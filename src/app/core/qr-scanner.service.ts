import { Injectable } from '@angular/core';
import { BarcodeScanner, ScanResult, SupportedFormat } from '@capacitor-community/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {
  private started = false;

  constructor() {
  }

  async startScan(): Promise<ScanResult> {
    try {
      this.started = true;

      const permissionGranted = await this.checkUserPermission();

      if (permissionGranted) {
        await BarcodeScanner.hideBackground();

        document.body.classList.add('qr-scanner-active');

        const scanResult = await BarcodeScanner.startScan({
          targetedFormats: [SupportedFormat.QR_CODE]
        });

        if (scanResult.hasContent) {
          // Continue the decrypting of the wallet with the next story,
          // notes: https://pixelmatic.slack.com/archives/C03SNCF4LUQ/p1666912749957049
          console.log(scanResult.content);

          return scanResult;
        }
      }

    } finally {

      this.started = false;

      document.body.classList.remove('qr-scanner-active');

      BarcodeScanner.showBackground();
    }
  }

  async stopScan() {
    this.started = false;
    await BarcodeScanner.stopScan();
    await BarcodeScanner.showBackground();
    document.body.classList.remove('qr-scanner-active');
  }

  isStarted(): boolean {
    return this.started;
  }

  private async checkUserPermission(): Promise<boolean> {
    return await this.softCheckUserPermission() || await this.forceCheckUserPermission();
  };

  private async softCheckUserPermission(): Promise<boolean> {
    const status = await BarcodeScanner.checkPermission({ force: false });

    console.log('SOFT CHECK', status);

    if (status.granted) {
      return true;
    }

    if (status.denied || status.restricted || status.unknown) {
      const confirmRedirect = confirm('If you want to grant permission for using your camera, enable it in the app settings.');

      if (confirmRedirect) {
        BarcodeScanner.openAppSettings();
      }
    }

    return false;
  };

  private async forceCheckUserPermission(): Promise<boolean> {
    const forceCheck = await BarcodeScanner.checkPermission({ force: true });

    console.log('FORCE CHECK', forceCheck);

    if (forceCheck.granted) {
      return true;
    }

    return false;
  };

}
