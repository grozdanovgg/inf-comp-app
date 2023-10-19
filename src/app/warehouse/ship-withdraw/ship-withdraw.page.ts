import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ship } from 'src/app/models/ship';
import { BaseSubscribeHandlerComponent } from 'src/app/shared/base-subscribe-handler.component';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ModalSize } from 'src/app/shared/modal/modal.types';
import { RequestWithdrawRequest } from 'src/proto/asset.pb';
import { GrpcMetadata } from '@ngx-grpc/common';
import { AssetServiceClient } from 'src/proto/asset.pbsc';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ship-withdraw',
  templateUrl: './ship-withdraw.page.html',
  styleUrls: ['./ship-withdraw.page.scss']
})
export class ShipWithdrawPage extends BaseSubscribeHandlerComponent implements AfterViewInit {

  @ViewChild('shipWithdrawContainer', { static: true })
  private shipWithdrawContainer: ElementRef;
  private ship: Ship;

  constructor(
    private renderer2: Renderer2,
    private router: Router,
    private http: HttpClient,
    private modalService: ModalService,
    private assetServiceClient: AssetServiceClient,
    private authenticationService: AuthenticationService
  ) {
    super();

    const { ship } = router.getCurrentNavigation()?.extras?.state || {};

    if (!ship) {
      console.error('No valid ship passed as a state in the router');

      this.router.navigate(['../warehouse']);
    }

    this.ship = new Ship(ship);
  }

  ngAfterViewInit(): void {
    this.generateWithdrawWebComponent();
  }

  private generateWithdrawWebComponent(): void {
    import('@pixelmatic/inf-web-components/inf-wcomp-ship-withdraw.js')
      .then(() => {
        const shipWithdrawElement = this.renderer2.createElement('inf-wcomp-ship-withdraw');

        this.renderer2.setProperty(shipWithdrawElement, 'ship', this.ship);
        this.renderer2.setProperty(shipWithdrawElement, 'browserEnv', false);
        this.renderer2.listen(shipWithdrawElement, 'navigateToWarehouse', this.navigateToWarehouse.bind(this));
        this.renderer2.listen(shipWithdrawElement, 'withdrawRequest', this.withdrawRequest.bind(this));
        this.renderer2.appendChild(this.shipWithdrawContainer.nativeElement, shipWithdrawElement);
      });
  }

  private navigateToWarehouse(): void {
    this.router.navigateByUrl(`/tabs/warehouse`);
  }

  private withdrawRequest(): void {
    this.authenticationService.auth0.getAccessTokenSilently()
      .pipe(switchMap((token) => this.assetServiceClient.requestWithdraw(
        new RequestWithdrawRequest({ assetId: this.ship.assetId }),
        new GrpcMetadata({
          ...environment.grpc.public,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'x-inf-auth': token
        })))
      )
      .subscribe({
        next: withdrawal => this.showWithdrawConfirmationSuccess(),
        error: e => this.showWithdrawConfirmationError(e)
      });
  }

  private showWithdrawConfirmationSuccess(): void {
    this.modalService.openNotification({
        title: 'warehouse.shipWithdraw.withdrawConfirmationSuccess.title',
        content: ['warehouse.shipWithdraw.withdrawConfirmationSuccess.description'],
        buttonText: 'warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText'
      },
      ModalSize.xs)
      .subscribe(eventDetails => {
        console.log('eventDetails', eventDetails);

        this.router.navigateByUrl('tabs/warehouse', { state: { withDrawRequestSuccess: true } });
      });
  }

  private showWithdrawConfirmationError(error: any): void {
    this.modalService.openNotification({
        title: 'warehouse.shipWithdraw.withdrawConfirmationError.title',
        content: ['warehouse.shipWithdraw.withdrawConfirmationError.description'],
        buttonText: 'warehouse.shipWithdraw.withdrawConfirmationError.buttonText'
      },
      ModalSize.xs)
      .subscribe(eventDetails => {
        console.log('eventDetails', eventDetails);
      });
  }
}
