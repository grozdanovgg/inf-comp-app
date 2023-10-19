import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { WalletService } from 'src/app/core/wallet.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.modal.html',
  styleUrls: ['./my-wallet.modal.scss'],
})
export class MyWalletModal implements OnInit {
  $walletPrivateKey: Observable<string>;
  $walletINFBalance: Observable<number>;
  $walletLBTCBalance: Observable<number>;
  $walletAssets: Observable<number>;
  obscured = true;

  constructor(private modalCtrl: ModalController,
              walletService: WalletService) {
    this.$walletPrivateKey = walletService.getWalletPrivateKey();
    this.$walletINFBalance = walletService.getINFBalance();
    this.$walletLBTCBalance = walletService.getLBTCBalance();
    this.$walletAssets = of(12); // TODO check where to get the real count.
  }

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }

  toggleShowKey(): void {
    this.obscured = !this.obscured;
  }
}
