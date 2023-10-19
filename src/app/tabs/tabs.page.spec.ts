import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LangChangeEvent, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { TabsPage } from './tabs.page';


describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
    translateSpy.get.and.returnValue(of(''));
    translateSpy.onLangChange = new EventEmitter<LangChangeEvent>();
    translateSpy.onTranslationChange = new EventEmitter();
    translateSpy.onDefaultLangChange = new EventEmitter();

    TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: TranslateService, useValue: translateSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
