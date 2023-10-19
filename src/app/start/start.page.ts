
import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { FeaturesControlService } from 'src/app/core/features-control.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  constructor(
    private authenticationService: AuthenticationService,
    public featuresControlService: FeaturesControlService
  ) {
  }

  login(): Subscription {
    return this.authenticationService.login();
  }

  openSignUpUrl(event: Event): void {
    event.preventDefault();

    Browser.open({ url: 'https://www.infinitefleet.com' });
  }
}
