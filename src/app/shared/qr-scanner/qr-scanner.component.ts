import { Component } from '@angular/core';
import { QrScannerService } from 'src/app/core/qr-scanner.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent {

  constructor(private qrScannerService: QrScannerService) {
  }

  cancel() {
    this.qrScannerService.stopScan();
  }
}
