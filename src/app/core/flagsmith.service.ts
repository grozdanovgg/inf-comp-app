/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { Flag, Flags } from 'src/app/models/flagsmith-types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlagsmithService {
  error?: Error;
  private flags = new Map<string, Flag<any>>();

  private httpOptions = {
    headers: new HttpHeaders({
      'x-environment-key': environment.flagsmithKey,
      Accept: 'application/json'
    })
  };
  private endpoints = {
    flag: 'flags/',
    identify: 'identities/?identifier=',
    traits: 'traits/'
  };

  constructor(private http: HttpClient) { }

  getFlag<F>(flag: Flags): Flag<F> {
    return this.flags.get(flag);
  }

  refresh(): Observable<Record<string, unknown>[]> {
    console.log('refreshing flagsmith flags');

    return this.http.get(`${environment.flagsmithHost}/${this.endpoints.flag}`, this.httpOptions)
      .pipe(
        tap((flagsJson: Record<string, unknown>[]) => {
          this.setFlags(flagsJson.map(flagData => new Flag(flagData)));
          this.error = undefined;
        }),
        catchError(err => {
          console.error('Error fetching Flagsmith ', err);
          this.error = new Error(err);

          return EMPTY;
        }),
        take(1)
      );
  }

  private setFlags<F>(flagsJson: Flag<F>[]): Map<string, Flag<F>> {
    flagsJson
      .filter(flag => Object.values<string>(Flags).includes(flag.feature.name))
      .forEach(flag => this.flags.set(flag.feature.name, new Flag(flag)));

    console.log('flags updated to ', this.flags);
    return this.flags;
  }
}
