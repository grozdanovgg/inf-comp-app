import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private apiService: ApiService) { }

  getProductsDetail<T>(externalIds: string[], locale = 'en'): Observable<T[]> {
    if (externalIds.length) {
      return this.apiService.get<T[]>('products', {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _external_id_eq: externalIds,
        _locale: locale
      });
    } else {
      return of([]);
    }
  }
}
