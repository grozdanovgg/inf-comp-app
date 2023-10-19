import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { LoadingIndicatorService } from 'src/app/core/loading-indicator.service';
import { MyWalletModal } from 'src/app/settings/wallet/my-wallet/my-wallet.modal';
import { WalletService } from 'src/app/core/wallet.service';
import { BasePageComponent } from 'src/app/shared/base-page/base-page.component';
import { Browser } from '@capacitor/browser';
import { environment } from 'src/environments/environment';
import { QrScannerService } from 'src/app/core/qr-scanner.service';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ModalSize } from 'src/app/shared/modal/modal.types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage extends BasePageComponent implements OnInit {
  hasWallet: boolean;

  constructor(
    private modalService: ModalService,
    private authenticationService: AuthenticationService,
    private walletService: WalletService,
    public loadingIndicatorService: LoadingIndicatorService,
    private qrScannerService: QrScannerService
  ) {

    super();
  }

  ngOnInit(): void {
    this.loadingIndicatorService.startLoading('settingsPage');
    this.walletService.hasWallet()
      .pipe(finalize(() => this.loadingIndicatorService.stopLoading('settingsPage')))
      .subscribe(hasWallet => this.hasWallet = hasWallet);
  }

  logout(): void {
    this.authenticationService.logout();
  }

  openMyWallet(): void {
    this.modalService.open(MyWalletModal, ModalSize.fullscreen);
  }

  setupWallet(): void {
    if (this.hasWallet) {
      this.scanQRCode();

    } else {
      this.walletService.showCreateWalletNotification();
    }
  };

  async scanQRCode(): Promise<void> {
    const scanResult = await this.qrScannerService.startScan();

    if (scanResult.hasContent) {
      Haptics.impact({ style: ImpactStyle.Light });

      this.walletService.setWalletPrivateKey(scanResult.content);
    }
  }

  openUserAccountUrl(): void {
    // Temporally redirect to the website, until we implement the AccountPage with later stories
    Browser.open({ url: environment.accountUrl });
  }
}
