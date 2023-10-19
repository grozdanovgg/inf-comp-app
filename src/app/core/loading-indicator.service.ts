import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  private loadingContextMap = new Map<string, boolean>();

  constructor() { }

  startLoading(context: string): void {
    this.loadingContextMap.set(context, true);
  }

  stopLoading(context: string): void {
    this.loadingContextMap.delete(context);
  }

  isLoading(context: string): boolean {
    return this.loadingContextMap.has(context);
  }
}
