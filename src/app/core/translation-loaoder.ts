import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as de from 'src/app/core/i18n/de.json';
import * as en from 'src/app/core/i18n/en.json';
import * as es from 'src/app/core/i18n/es.json';
import * as fr from 'src/app/core/i18n/fr.json';
import * as it from 'src/app/core/i18n/it.json';
import * as jp from 'src/app/core/i18n/jp.json';
import * as ko from 'src/app/core/i18n/ko.json';
import * as pt from 'src/app/core/i18n/pt.json';
import * as ru from 'src/app/core/i18n/ru.json';
import * as zhTW from 'src/app/core/i18n/zh-TW.json';
import * as zh from 'src/app/core/i18n/zh.json';

export class CustomTranslationLoader implements TranslateLoader {
  languages: Map<string, object>;

  constructor() {
    this.languages = new Map<string, object>([
      ['de', de],
      ['en', en],
      ['es', es],
      ['fr', fr],
      ['it', it],
      ['jp', jp],
      ['ko', ko],
      ['pt', pt],
      ['ru', ru],
      ['zh-TW', zhTW],
      ['zh', zh]
    ]);
  }

  getTranslation(language: string): Observable<object> {
    return of(this.languages.get(language) || this.languages.get('en') as object);
  }
}
