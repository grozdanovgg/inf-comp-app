import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipWithdrawPageRoutingModule } from './ship-withdraw-routing.module';

import { ShipWithdrawPage } from './ship-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipWithdrawPageRoutingModule
  ],
  declarations: [ShipWithdrawPage]
})
export class ShipWithdrawPageModule {}
