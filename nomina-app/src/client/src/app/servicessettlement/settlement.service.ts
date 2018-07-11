import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Settlement } from '../Settlement';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {
  domain : string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

    getSettlement(){
      return this.http.get<Settlement[]>(`${this.domain}/api/settlement`)
      .map(res => res);
    }

    addSettlement(newSettlement: Settlement){
      return this.http.post<Settlement>(`${this.domain}/api/settlement`,newSettlement)
      .map(res => res);
    }

    deleteSettlement(id){
      return this.http.delete<Settlement>(`${this.domain}/api/settlement/${id}`)
      .map(res => res);
    }
}
