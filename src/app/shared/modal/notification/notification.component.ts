import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalButtonStyle } from 'src/app/shared/modal/modal.types';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  title?: string;
  content?: string[];
  buttonText: string;
  buttonStyle?: ModalButtonStyle;

  constructor(private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }
}
