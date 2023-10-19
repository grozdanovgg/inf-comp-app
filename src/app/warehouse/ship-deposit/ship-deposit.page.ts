import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, from, take, takeUntil } from 'rxjs';
import { BaseSubscribeHandlerComponent } from 'src/app/shared/base-subscribe-handler.component';
import { ShipDepositService } from 'src/app/warehouse/ship-deposit/ship-deposit.service';

@Component({
  selector: 'app-ship-deposit',
  templateUrl: './ship-deposit.page.html',
  styleUrls: ['./ship-deposit.page.scss']
})
export class ShipDepositPage extends BaseSubscribeHandlerComponent implements AfterViewInit {

  @ViewChild('shipDepositContainer', { static: true })
  shipDepositContainer: ElementRef;

  constructor(private renderer2: Renderer2,
              private router: Router,
              private shipDepositService: ShipDepositService
              ) {
    super();
  }

  ngAfterViewInit(): void {
    this.generateDepositWebComponent();
  }

  navigate(route: CustomEvent): void {
    this.router.navigateByUrl(route.detail);
  }

  navigateToWarehouse(route: CustomEvent): void {
    this.router.navigateByUrl('/tabs/warehouse');
  }

  private generateDepositWebComponent(): void {

    forkJoin([
      this.shipDepositService.getPlayerWalletAddress(),
      from(import('@pixelmatic/inf-web-components/inf-wcomp-ship-deposit.js'))
    ])
      .pipe(
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe(([playerWalletInfo]) => {
        const shipDepositElement = this.renderer2.createElement('inf-wcomp-ship-deposit');
        this.renderer2.setProperty(shipDepositElement, 'walletAddress', playerWalletInfo.address);
        this.renderer2.setProperty(shipDepositElement, 'browserEnv', false);
        this.renderer2.listen(shipDepositElement, 'navigateToContextRoute', this.navigate.bind(this));
        this.renderer2.listen(shipDepositElement, 'navigateToWarehouse', this.navigateToWarehouse.bind(this));
        this.renderer2.appendChild(this.shipDepositContainer.nativeElement, shipDepositElement);
      });
  }
}

