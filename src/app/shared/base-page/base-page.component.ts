import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BaseSubscribeHandlerComponent } from 'src/app/shared/base-subscribe-handler.component';

@Component({
  templateUrl: './base-page.component.html'
})
export abstract class BasePageComponent extends BaseSubscribeHandlerComponent implements AfterViewInit {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.addContentPadding();
  }

  private addContentPadding() {

    // @ts-ignore;
    this.ionContent?.el.style.setProperty('--padding-bottom', 'var(--comp-tab-bar-height)');
  }
}
