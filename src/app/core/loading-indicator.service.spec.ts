import { TestBed } from '@angular/core/testing';

import { LoadingIndicatorService } from './loading-indicator.service';

describe('loadingIndicatorService', () => {
  let service: LoadingIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('startLoading()', () => {
    it('should set context in the loadingContextMap', () => {
      service.startLoading('foo-context');

      // @ts-ignore
      expect(service.loadingContextMap.has('foo-context')).toBeTrue();
    });
  });

  describe('stopLoading()', () => {
    it('should delete context from the loadingContextMap', () => {
      // @ts-ignore
      service.loadingContextMap.set('foo-context', 'foo-value');

      service.stopLoading('foo-context');

      // @ts-ignore
      expect(service.loadingContextMap.has('foo-context')).toBeFalse();
    });
  });

  describe('isLoading()', () => {
    it('should return true if the loadingContextMap has any entries', () => {
      // @ts-ignore
      service.loadingContextMap.set('foo-context', 'foo-value');

      expect(service.isLoading('foo-context')).toBeTrue();
    });

    it('should return false if the loadingContextMap has no entries', () => {
      // @ts-ignore
      service.loadingContextMap.clear();

      expect(service.isLoading('foo-context')).toBeFalse();
    });
  });
});
