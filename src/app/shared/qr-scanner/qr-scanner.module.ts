import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerComponent } from 'src/app/shared/qr-scanner/qr-scanner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    QrScannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule
  ],
  exports: [
    QrScannerComponent
  ]
})
export class QrScannerModule { }
