import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { filter, finalize, forkJoin, map, of, pairwise, Subscription, switchMap, take, takeUntil } from 'rxjs';
import { FlagsmithService } from 'src/app/core/flagsmith.service';
import { LoadingIndicatorService } from 'src/app/core/loading-indicator.service';
import { Flags } from 'src/app/models/flagsmith-types';
import { Ship } from 'src/app/models/ship';
import { WalletService } from 'src/app/core/wallet.service';
import { BasePageComponent } from 'src/app/shared/base-page/base-page.component';
import { WarehouseService } from './warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss']
})
export class WarehousePage extends BasePageComponent implements AfterViewInit {
  @ViewChild('warehouseContainer', { static: true })
  warehouseContainer: ElementRef;
  warehouseElement: any;

  constructor(private warehouseService: WarehouseService,
              private renderer2: Renderer2,
              private router: Router,
              private walletService: WalletService,
              public loadingIndicatorService: LoadingIndicatorService,
              private flagsmithService: FlagsmithService
  ) {

    super();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.generateWarehouseWebComponent();
  }

  navigate(route: CustomEvent): void {
    this.router.navigateByUrl(route.detail);
  }

  transferShipToWallet(route: CustomEvent<Ship>): void {
    this.router.navigate(['/tabs/warehouse/ship-withdraw'], {
      state: { ship: route.detail }
    });
  }

  transferShipToGame(route: CustomEvent): void {
    this.router.navigateByUrl(`/tabs/warehouse/ship-deposit`);
  }

  private generateWarehouseWebComponent(): Subscription {
    this.loadingIndicatorService.startLoading('generateWarehouseWebComponent');
    return forkJoin({
      ships: this.warehouseService.getShips(),
      hasWallet: this.walletService.hasWallet()
    })
      .pipe(
        switchMap(({ ships, hasWallet }) => {
          if (hasWallet) {
            return this.walletService.getINFBalance()
              .pipe(map(infBalance => ({ ships, hasWallet, infBalance })));
          }

          return of({ ships, hasWallet, infBalance: 0 });
        }),
        takeUntil(this.destroy$),
        finalize(() => this.loadingIndicatorService.stopLoading('generateWarehouseWebComponent'))
      )
      .subscribe(({ ships, hasWallet, infBalance }) => {
        import('@pixelmatic/inf-web-components/inf-wcomp-warehouse.js')
          .then(() => {
            this.renderWarehouseWebComponent(ships, hasWallet, infBalance);
            this.handleShipWithdrawCallback();
          });
      });
  }

  private renderWarehouseWebComponent(ships: Ship[], hasWallet: boolean, infBalance: number): void {
    const shipDepositEnabled = this.flagsmithService.getFlag(Flags.shipDeposit).enabled;
    const shipWithdrawEnabled = this.flagsmithService.getFlag(Flags.shipWithdraw).enabled;

    this.warehouseElement = this.renderer2.createElement('inf-wcomp-warehouse');

    this.renderer2.setProperty(this.warehouseElement, 'browserEnv', false);
    this.renderer2.setProperty(this.warehouseElement, 'ships', ships);
    this.renderer2.setProperty(this.warehouseElement, 'hasWallet', hasWallet);
    this.renderer2.setProperty(this.warehouseElement, 'infBalance', infBalance);
    this.renderer2.setProperty(this.warehouseElement, 'disableNFTDepositBtn', !shipDepositEnabled);
    this.renderer2.setProperty(this.warehouseElement, 'disableWithdrawNFTBtn', !shipWithdrawEnabled);

    this.renderer2.listen(this.warehouseElement, 'navigateToContextRoute', this.navigate.bind(this));
    this.renderer2.listen(this.warehouseElement, 'transferShipToWallet', this.transferShipToWallet.bind(this));
    this.renderer2.listen(this.warehouseElement, 'transferShipToGame', this.transferShipToGame.bind(this));

    this.renderer2.appendChild(this.warehouseContainer.nativeElement, this.warehouseElement);
  }

  private handleShipWithdrawCallback(): void {
    this.router.events
      .pipe(
        pairwise(),
        // @ts-ignore
        filter(([navigationEnd]) => navigationEnd.url === '/tabs/warehouse/ship-withdraw'),
        // @ts-ignore
        filter(() => this.router.getCurrentNavigation()?.extras?.state?.withDrawRequestSuccess),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe(() => {
        this.renderer2.removeChild(
          this.warehouseContainer.nativeElement,
          this.warehouseElement
        );
        this.generateWarehouseWebComponent();
      });
  }
}

