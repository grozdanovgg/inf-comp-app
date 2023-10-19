import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrScannerComponent } from './qr-scanner.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { QrScannerService } from 'src/app/core/qr-scanner.service';

describe('QrScannerComponent', () => {
  let component: QrScannerComponent;
  let fixture: ComponentFixture<QrScannerComponent>;
  let qrScannerService: jasmine.SpyObj<QrScannerService>;

  beforeEach(waitForAsync(() => {
    qrScannerService = jasmine.createSpyObj('qrScannerService', ['stopScan']);

    TestBed.configureTestingModule({
      declarations: [QrScannerComponent],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })],
      providers: [
        { provide: QrScannerService, useValue: qrScannerService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QrScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel()', () => {
    it('should call qrScannerService.stopScan()', () => {
      component.cancel();

      expect(qrScannerService.stopScan).toHaveBeenCalledOnceWith();
    });
  });
});
