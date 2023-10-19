import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { MyWalletModal } from './wallet/my-wallet/my-wallet.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage,
    MyWalletModal
  ],
  providers: [HttpClient]
})
export class SettingsPageModule { }
