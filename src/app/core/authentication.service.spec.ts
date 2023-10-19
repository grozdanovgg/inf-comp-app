import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { of } from 'rxjs';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    spyOn(Browser, 'open');
    authServiceSpy = jasmine.createSpyObj('authService', ['buildAuthorizeUrl', 'buildLogoutUrl', 'logout']);

    authServiceSpy.buildAuthorizeUrl.and.returnValue(of('foo://login.com'));
    authServiceSpy.buildLogoutUrl.and.returnValue(of('foo://logout.com'));

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login()', () => {
    it('should call auth0.buildAuthorizeUrl()', () => {
      service.login();

      expect(authServiceSpy.buildAuthorizeUrl).toHaveBeenCalledOnceWith();
    });
  });

  describe('logout()', () => {
    it('should call auth0.buildLogoutUrl()', () => {
      service.logout();

      expect(authServiceSpy.buildLogoutUrl).toHaveBeenCalledOnceWith({ returnTo: jasmine.any(String) });
    });
  });

  describe('clearCache()', () => {
    it('should clear the cached properties', () => {
      // @ts-ignore
      service.userInfoCache$ = 'foo';

      // @ts-ignore
      service.clearCache();

      // @ts-ignore
      expect(service.userInfoCache$).toBeUndefined();
    });
  });
});
