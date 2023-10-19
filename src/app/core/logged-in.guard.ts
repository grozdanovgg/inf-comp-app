import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authenticationService.auth0.isAuthenticated$
      .pipe(
        tap((isAuthenticated) => {
          console.log('LoggedInGuard isAuthenticated', isAuthenticated, state.url);
          if (!isAuthenticated) {
            console.log('Redirecting to /login');
            this.router.navigateByUrl('/login');
          }
        }));
  }

}
