import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ShipDepositPage } from './ship-deposit.page';
import { ShipDepositService } from 'src/app/warehouse/ship-deposit/ship-deposit.service';
import { of } from 'rxjs';
import { PlayerWalletInfo } from 'src/app/warehouse/ship-deposit/ship-deposit.types';

describe('ShipDepositPage', () => {
  let component: ShipDepositPage;
  let fixture: ComponentFixture<ShipDepositPage>;
  let shipDepositService: jasmine.SpyObj<ShipDepositService>;

  beforeEach(async () => {
    shipDepositService = jasmine.createSpyObj('shipDepositService', ['getPlayerWalletAddress']);
    shipDepositService.getPlayerWalletAddress.and.returnValue(of({address: 'foo-wallet-address'} as PlayerWalletInfo));

    await TestBed.configureTestingModule({
      declarations: [ShipDepositPage],
      providers: [
        {provide: ShipDepositService, useValue: shipDepositService}
      ],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipDepositPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('generateDepositWebComponent()', () => {
    it('should call getPlayerWalletAddress', () => {
      // @ts-ignore
      component.generateDepositWebComponent();

      expect(shipDepositService.getPlayerWalletAddress).toHaveBeenCalledWith();
    });
  });
});
