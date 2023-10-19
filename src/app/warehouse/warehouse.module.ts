import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalletService } from 'src/app/core/wallet.service';
import { WarehousePageRoutingModule } from './warehouse-routing.module';
import { WarehousePage } from './warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WarehousePageRoutingModule,
  ],
  providers: [WalletService],
  declarations: [WarehousePage],
  entryComponents: [],

})
export class WarehousePageModule {}
