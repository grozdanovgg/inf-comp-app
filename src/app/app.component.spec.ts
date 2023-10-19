import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { FlagsmithService } from 'src/app/core/flagsmith.service';
import { AppComponent } from './app.component';
import { WalletService } from 'src/app/core/wallet.service';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { MatomoConfiguration } from '@ngx-matomo/tracker/lib/configuration';
import { of } from 'rxjs';


describe('AppComponent', () => {
  let flagsmithService: jasmine.SpyObj<FlagsmithService>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let walletService: jasmine.SpyObj<WalletService>;

  beforeEach(waitForAsync(() => {
    flagsmithService = jasmine.createSpyObj('flagsmithService', ['refresh']);
    authenticationServiceSpy = jasmine.createSpyObj('flagsmithService', ['refresh', 'getUserInfo']);
    const translateSpy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use', 'instant']);
    modalControllerSpy = jasmine.createSpyObj('modalControllerSpy', ['create']);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    authenticationServiceSpy.getUserInfo.and.returnValue(of({ user_metadata: {} }));

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        NgxMatomoTrackerModule.forRoot({} as MatomoConfiguration)
      ],
      providers: [
        { provide: FlagsmithService, useValue: flagsmithService },
        { provide: WalletService, useValue: walletService },
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: TranslateService, useValue: translateSpy },
        { provide: ModalController, useValue: modalControllerSpy }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!

});
