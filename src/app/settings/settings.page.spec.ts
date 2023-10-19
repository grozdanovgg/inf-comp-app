import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  LangChangeEvent,
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { SettingsPage } from './settings.page';
import { WalletService } from 'src/app/core/wallet.service';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let walletService: jasmine.SpyObj<WalletService>;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
    translateSpy.get.and.returnValue(of(''));
    translateSpy.onLangChange = new EventEmitter<LangChangeEvent>();
    translateSpy.onTranslationChange = new EventEmitter();
    translateSpy.onDefaultLangChange = new EventEmitter();

    authenticationServiceSpy = jasmine.createSpyObj('flagsmithService', ['getFlag']);
    modalControllerSpy = jasmine.createSpyObj('modalControllerSpy', ['create']);
    walletService = jasmine.createSpyObj('walletService', ['hasWallet', 'showCreateWalletNotification']);

    walletService.hasWallet.and.returnValue(of(true));

    TestBed.configureTestingModule({
      declarations: [SettingsPage],
      imports: [
        HttpClientTestingModule,
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: WalletService, useValue: walletService },
        { provide: TranslateService, useValue: translateSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setupWallet()', () => {
    beforeEach(() => {
      spyOn(component, 'scanQRCode');
    });

    it('should call scanQRCode() if the user has wallet', () => {
      component.hasWallet = true;

      component.setupWallet();

      expect(component.scanQRCode).toHaveBeenCalledOnceWith();
      expect(walletService.showCreateWalletNotification).not.toHaveBeenCalled();
    });

    it('should call walletService.showCreateWalletNotification() if the user doesnt have wallet', () => {
      component.hasWallet = false;

      component.setupWallet();

      expect(component.scanQRCode).not.toHaveBeenCalled();
      expect(walletService.showCreateWalletNotification).toHaveBeenCalledOnceWith();
    });
  });
});
