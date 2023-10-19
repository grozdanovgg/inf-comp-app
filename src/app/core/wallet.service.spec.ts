import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { ModalController } from '@ionic/angular';
import { ExoWalletKit } from '@pixelmatic/ewk';
import { Observable, of, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { WalletService } from 'src/app/core/wallet.service';

describe('WalletService', () => {
  let service: WalletService;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    modalControllerSpy = jasmine.createSpyObj('modalControllerSpy', ['create']);
    authenticationServiceSpy = jasmine.createSpyObj('authenticationService', ['getUserInfo', 'getUser']);
    authenticationServiceSpy.onLogout$ = jasmine.createSpyObj<Subject<boolean>>('onLogoutSpy', ['subscribe']);

    authenticationServiceSpy.getUserInfo.and.returnValue({ pipe: () => { } } as Observable<any>);
    authenticationServiceSpy.getUser.and.returnValue({ pipe: () => { } } as Observable<any>);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, HttpClientModule
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
      ]
    });

    service = TestBed.inject(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hasWallet()', () => {
    it('should call getExoWalletKit() and check hasWallet()', done => {
      const ewkMock = jasmine.createSpyObj('ewkMock', ['hasWallet']);
      ewkMock.hasWallet.and.returnValue(of(true));

      // @ts-ignore
      spyOn(service, 'getExoWalletKit').and.returnValue(of(ewkMock));

      service.hasWallet()
        .subscribe(() => {
          // @ts-ignore
          expect(ewkMock.hasWallet).toHaveBeenCalledOnceWith();
          done();
        });
    });
  });

  describe('getBalances()', () => {
    it('should call getExoWalletKit to get the ewk instance and call ewk.getBalances()', done => {
      const ewk: jasmine.SpyObj<ExoWalletKit> = jasmine.createSpyObj('ewk', ['getBalances']);
      ewk.getBalances.and.returnValue(Promise.resolve([]));
      spyOn<WalletService, any>(service, 'getExoWalletKit').and.returnValue(of(ewk));

      service.getBalances()
        .subscribe(() => {
          // @ts-ignore
          expect(service.getExoWalletKit).toHaveBeenCalledOnceWith();
          done();
        });
    });
  });
});
