import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LangChangeEvent, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { StartPage } from './start.page';


describe('StartPage', () => {
  let component: StartPage;
  let fixture: ComponentFixture<StartPage>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get']);
    translateSpy.get.and.returnValue(of(''));
    translateSpy.onLangChange = new EventEmitter<LangChangeEvent>();
    translateSpy.onTranslationChange = new EventEmitter();
    translateSpy.onDefaultLangChange = new EventEmitter();

    TestBed.configureTestingModule({
      declarations: [StartPage],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        HttpClientModule
      ],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: TranslateService, useValue: translateSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
