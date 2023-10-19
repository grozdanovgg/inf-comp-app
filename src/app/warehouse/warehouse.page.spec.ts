import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import {
  LangChangeEvent,
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { WalletService } from 'src/app/core/wallet.service';
import { WarehousePage } from './warehouse.page';


describe('WarehousePage', () => {
  let component: WarehousePage;
  let fixture: ComponentFixture<WarehousePage>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let walletService: jasmine.SpyObj<WalletService>;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
    authenticationServiceSpy = jasmine.createSpyObj('flagsmithService', ['refresh']);

    translateSpy.get.and.returnValue(of(''));
    translateSpy.onLangChange = new EventEmitter<LangChangeEvent>();
    translateSpy.onTranslationChange = new EventEmitter();
    translateSpy.onDefaultLangChange = new EventEmitter();
    authenticationServiceSpy = jasmine.createSpyObj('flagsmithService', ['refresh']);

    TestBed.configureTestingModule({
      declarations: [ WarehousePage ],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      providers: [
        { provide: TranslateService, useValue: translateSpy },
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: WalletService, useValue: walletService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousePage);
    component = fixture.componentInstance;

    spyOn<WarehousePage, any>(component, 'generateWarehouseWebComponent').and.returnValue(undefined);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
