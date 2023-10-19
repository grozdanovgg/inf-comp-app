/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { IonicModule } from '@ionic/angular';

import { WarehouseService } from './warehouse.service';

describe('WarehouseService', () => {
  let service: WarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AuthModule.forRoot({} as AuthConfig),
        IonicModule.forRoot()
      ],
    });
    service = TestBed.inject(WarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
