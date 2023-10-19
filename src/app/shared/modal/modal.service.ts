import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { ComponentRef, OverlayEventDetail } from '@ionic/core';
import { from, Observable, throwError } from 'rxjs';
import { ModalButtonStyle, ModalSize } from 'src/app/shared/modal/modal.types';
import { NotificationComponent } from 'src/app/shared/modal/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalController: ModalController) {
  }

  openNotification(
    { title, content, buttonText, buttonStyle }: Partial<NotificationComponent> = {},
    size?: ModalSize): Observable<OverlayEventDetail | Observable<never>> {

    return this.openModal({
      component: NotificationComponent,
      componentProps: {
        title,
        content,
        buttonText,
        buttonStyle: buttonStyle || ModalButtonStyle.solid
      }
    }, size);
  }

  open(component: ComponentRef,
       size?: ModalSize): Observable<OverlayEventDetail | Observable<never>> {

    return this.openModal({ component }, size);
  }

  private openModal(
    options: ModalOptions,
    size: ModalSize = ModalSize.m): Observable<OverlayEventDetail | Observable<never>> {

    return from(this.modalController.create({
      ...options,
      cssClass: size
    })
      .then(modal => {
        modal.present();

        return modal.onDidDismiss()
          .catch(() => throwError(() => new Error('Modal throws an error')));
      }));
  }
}
