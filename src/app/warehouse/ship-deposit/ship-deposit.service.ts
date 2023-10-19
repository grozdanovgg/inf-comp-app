import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerWalletInfo } from 'src/app/warehouse/ship-deposit/ship-deposit.types';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipDepositService {

  constructor(private http: HttpClient) { }

  getPlayerWalletAddress(): Observable<PlayerWalletInfo> {
    return this.http.get<PlayerWalletInfo>(`${environment.custodialWalletService}/v1/player-deposit-address/current`);
  }
}
