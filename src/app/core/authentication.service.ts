import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import config from 'capacitor.config';
import { filter, Observable, shareReplay, Subject, Subscription, switchMap, take, tap } from 'rxjs';
import { UserInfo } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  onLogout$: Subject<boolean> = new Subject();
  private userInfoCache$: Observable<UserInfo>;


  constructor(
    public auth0: AuthService,
    private http: HttpClient
  ) { }

  login(): Subscription {
    return this.auth0.buildAuthorizeUrl()
      .pipe(
        take(1),
        tap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();
  }

  logout(): void {
    let returnTo = `${config.appId}://${environment.auth0.domain}`;

    if (!environment.mobile) {
      returnTo = 'http://localhost:4200';
    }

    this.auth0.buildLogoutUrl({ returnTo })
      .pipe(
        take(1),
        tap((url) => {
          this.auth0.logout({ localOnly: true });
          this.clearCache();
          Browser.open({ url, windowName: '_self' });

          this.onLogout$.next(true);
        }))
      .subscribe();
  }

  getUser(): Observable<User> {
    return this.auth0.user$
      .pipe(
        filter(user => Boolean(user)),
        take(1)
      );
  }


  getUserInfo(): Observable<UserInfo> {
    if (!this.userInfoCache$) {
      this.userInfoCache$ = this.getUser()
      .pipe(
        switchMap(({ sub }) => {
          console.log(sub);

          return this.http.get<UserInfo>(`https://${environment.auth0.domain}/api/v2/users/${sub}`);
        }),
        take(1),
        shareReplay(1)
      );
    }

    return this.userInfoCache$;
  }

  private clearCache() {
    this.userInfoCache$ = undefined;
  }
}
