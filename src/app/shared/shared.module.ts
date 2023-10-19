import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { ObscurePipe } from './obscure.pipe';

@NgModule({
  declarations: [
    ObscurePipe
  ],
  imports: [
    CommonModule,
    ModalModule,
  ],
  exports: [
    TranslateModule,
    ObscurePipe
  ]
})
export class SharedModule { }
