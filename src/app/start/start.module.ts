import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { StartRoutingModule } from './start-routing.module';
import { StartPage } from './start.page';

@NgModule({
  declarations: [StartPage],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    StartRoutingModule,
  ]
})
export class StartModule { }
