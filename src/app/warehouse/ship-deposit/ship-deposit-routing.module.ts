import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipDepositPage } from './ship-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: ShipDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipDepositPageRoutingModule {}
