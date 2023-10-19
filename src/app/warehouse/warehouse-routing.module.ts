import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousePage } from './warehouse.page';


const routes: Routes = [
  {
    path: '',
    component: WarehousePage
  },
  {
    path: 'ship-deposit',
    loadChildren: () => import('./ship-deposit/ship-deposit.module').then( m => m.ShipDepositPageModule)
  },
  {
    path: 'ship-withdraw',
    loadChildren: () => import('./ship-withdraw/ship-withdraw.module').then( m => m.ShipWithdrawPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousePageRoutingModule {}
