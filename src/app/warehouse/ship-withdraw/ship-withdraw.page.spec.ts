import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { Ship } from 'src/app/models/ship';
import { WarehouseService } from 'src/app/warehouse/warehouse.service';

import { ShipWithdrawPage } from './ship-withdraw.page';

describe('ShipWithdrawPage', () => {
  let component: ShipWithdrawPage;
  let fixture: ComponentFixture<ShipWithdrawPage>;
  let warehouseService: jasmine.SpyObj<WarehouseService>;

  beforeEach(async () => {
    warehouseService = jasmine.createSpyObj('warehouseService', ['getShipTemplate']);

    warehouseService.getShipTemplate.and.returnValue((of({} as Ship)));

    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        IonicModule.forRoot()
      ],
      declarations: [ShipWithdrawPage],
      providers: [
        { provide: WarehouseService, useValue: warehouseService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipWithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
