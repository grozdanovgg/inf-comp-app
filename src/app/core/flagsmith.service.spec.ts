import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FlagsmithService } from './flagsmith.service';

describe('FlagsmithService', () => {
  let service: FlagsmithService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(FlagsmithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
