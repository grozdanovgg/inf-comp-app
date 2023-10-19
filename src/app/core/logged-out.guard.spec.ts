import { TestBed } from '@angular/core/testing';
import { RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { LoggedOutGuard } from './logged-out.guard';

describe('LoggedOutGuard', () => {
  let guard: LoggedOutGuard;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let sheduler: TestScheduler;

  beforeEach(() => {
    sheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    authenticationServiceSpy = jasmine.createSpyObj('authenticationService', ['login', 'logout']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
      ]
    });
    guard = TestBed.inject(LoggedOutGuard);

    // @ts-ignore
    spyOn(guard.router, ['navigateByUrl']);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate()', () => {
    it('should not naviage to / if isAuthenticated is false', () => {
      const state: RouterStateSnapshot = {
        url: 'foo'
      } as RouterStateSnapshot;

      authenticationServiceSpy.auth0 = {
        isAuthenticated$: of(false)
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
        isAuthenticated$: of(true)
      } as AuthService;

      sheduler.run(({ flush, expectObservable }) => {
        const expectedMarble = '(a|)';
        const expectedValues = { a: false };

        const result$ = (guard.canActivate(null, state) as Observable<boolean>);

        expectObservable(result$).toBe(expectedMarble, expectedValues);

        flush();

        // @ts-ignore
        expect(guard.router.navigateByUrl).toHaveBeenCalledOnceWith('/');
      });
    });
  });
});
