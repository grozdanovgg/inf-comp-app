import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;

  beforeEach(waitForAsync(() => {
    modalControllerSpy = jasmine.createSpyObj('modalControllerSpy', ['dismiss']);

    TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy }
      ],
      imports: [IonicModule.forRoot(),
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
      })]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBeUndefined();
    expect(component.content).toBeUndefined();
    expect(component.buttonText).toBeUndefined();
    expect(component.buttonStyle).toBeUndefined();
  });

  describe('dismiss', () => {
    it('should call modalControllelr.dismiss()', () => {
      component.dismiss();

      expect(modalControllerSpy.dismiss).toHaveBeenCalledOnceWith();
    });
  });
});
