import { TestBed } from '@angular/core/testing';
import { RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let sheduler: TestScheduler;

  beforeEach(() => {
    sheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    authenticationServiceSpy = jasmine.createSpyObj('flagsmithService', ['getFlag']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy }
      ]
    });
    guard = TestBed.inject(LoggedInGuard);

    // @ts-ignore
    spyOn(guard.router, ['navigateByUrl']);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate()', () => {
    it('should not naviage to login if isAuthenticated is true', () => {
      const state: RouterStateSnapshot = {
        url: 'foo'
      } as RouterStateSnapshot;

      authenticationServiceSpy.auth0 = {
        isAuthenticated$: of(true)
      } as AuthService;

      sheduler.run(({ flush, expectObservable }) => {
        const expectedMarble = '(a|)';
        const expectedValues = { a: true };

        const result$ = (guard.canActivate(null, state) as Observable<boolean>);

        expectObservable(result$).toBe(expectedMarble, expectedValues);

        flush();

        // @ts-ignore
        expect(guard.router.navigateByUrl).not.toHaveBeenCalled();
      });
    });

    it('should naviage to login if isAuthenticated is false', () => {
      const state: RouterStateSnapshot = {
        url: 'foo'
      } as RouterStateSnapshot;

      authenticationServiceSpy.auth0 = {
        isAuthenticated$: of(false)
      } as AuthService;

      sheduler.run(({ flush, expectObservable }) => {
        const expectedMarble = '(a|)';
        const expectedValues = { a: false };

        const result$ = (guard.canActivate(null, state) as Observable<boolean>);

        expectObservable(result$).toBe(expectedMarble, expectedValues);

        flush();

        // @ts-ignore
        expect(guard.router.navigateByUrl).toHaveBeenCalledOnceWith('/login');
      });
    });
  });
});
