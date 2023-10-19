/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  handleErrors(error: Response) {
    return throwError(() => console.error(error));
  }

  get<T>(path: string, params = {}): Observable<T> {
    return this.http
      .get<T>(`${environment.backend}/${path}`, {params})
      .pipe(catchError(this.handleErrors));
  }

  post<T>(path: string, body = {}): Observable<T> {
    return this.http
      .post<T>(
        `${environment.backend}/${path}`,
        body
      )
      .pipe(catchError(this.handleErrors));
  }

  put<T>(path: string, body = {}): Observable<T> {
    return this.http
      .put<T>(
        `${environment.backend}/${path}`,
        body
      )
      .pipe(catchError(this.handleErrors));
  }

  delete<T>(path): Observable<T> {
    return this.http
      .delete<T>(
        `${environment.backend}/${path}`
      )
      .pipe(catchError(this.handleErrors));
  }
}
