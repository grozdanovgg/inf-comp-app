
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authenticationService.auth0.isAuthenticated$
      .pipe(
        map((isAuthenticated) => {
          console.log('LoggedOutGuard isAuthenticated', isAuthenticated, state.url);

          if (isAuthenticated) {
            console.log('Redirecting to /');

            this.router.navigateByUrl('/');
          }

          return !isAuthenticated;
        })
      );
  }
}
