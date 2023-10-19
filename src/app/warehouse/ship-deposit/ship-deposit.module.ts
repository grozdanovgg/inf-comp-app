import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipDepositPageRoutingModule } from './ship-deposit-routing.module';

import { ShipDepositPage } from './ship-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipDepositPageRoutingModule
  ],
  declarations: [ShipDepositPage]
})
export class ShipDepositPageModule {}
