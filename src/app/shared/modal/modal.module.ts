import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationComponent } from 'src/app/shared/modal/notification/notification.component';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule
  ]
})
export class ModalModule { }
