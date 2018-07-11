import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Payment } from '../Payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  domain : string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getPayment(){
    return this.http.get<Payment[]>(`${this.domain}/api/payment`)
    .map(res => res);
  }

  addPayment(newPayment: Payment){
    return this.http.post<Payment>(`${this.domain}/api/payment`, newPayment)
    .map(res => res);
  }

  editPayment(newPayment){
    return this.http.put<Payment>(`${this.domain}/api/payment/${newPayment._id}`,
      newPayment).map(res => res);
  }

  deletePayment(id){
    return this.http.delete<Payment>(`${this.domain}/api/payment/${id}`)
    .map(res => res);
  }

}
