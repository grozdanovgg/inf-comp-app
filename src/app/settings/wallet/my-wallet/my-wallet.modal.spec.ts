import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LangChangeEvent, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { MyWalletModal } from './my-wallet.modal';

describe('MyWalletModal', () => {
  let component: MyWalletModal;
  let fixture: ComponentFixture<MyWalletModal>;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
    translateSpy.get.and.returnValue(of(''));
    translateSpy.onLangChange = new EventEmitter<LangChangeEvent>();
    translateSpy.onTranslationChange = new EventEmitter();
    translateSpy.onDefaultLangChange = new EventEmitter();

    TestBed.configureTestingModule({
      declarations: [MyWalletModal],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: TranslateService, useValue: translateSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWalletModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
