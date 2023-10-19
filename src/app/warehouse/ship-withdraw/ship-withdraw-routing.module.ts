import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipWithdrawPage } from './ship-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: ShipWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipWithdrawPageRoutingModule {}
