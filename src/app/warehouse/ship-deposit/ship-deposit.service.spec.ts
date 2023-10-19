import { TestBed } from '@angular/core/testing';

import { ShipDepositService } from 'src/app/warehouse/ship-deposit/ship-deposit.service';
import { HttpClientModule } from '@angular/common/http';

describe('ShipDepositService', () => {
  let service: ShipDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ShipDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
