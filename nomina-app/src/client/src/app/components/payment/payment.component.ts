import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentService } from '../../services/payment.service'
import { Payment } from '../../Payment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [PaymentService]
})

export class PaymentComponent implements OnInit {

  payments : Payment[];

  cedula: number;
  nombres: string;
  apellidos: string;
  contrato: string;
  salario: number;

  constructor( private paymentService: PaymentService
  , private router: Router) {
      this.paymentService.getPayment().subscribe(res => {
        this.payments = res
      });
  }

  ngOnInit() {
  }

  addPayment(event){
    event.preventDefault();

    const newPayment : Payment = {
      cedula: this.cedula,
      nombres: this.nombres,
      apellidos: this.apellidos,
      contrato: this.contrato,
      salario: this.salario
    };
    this.paymentService.addPayment(newPayment)
    .subscribe(payment => {
       this.payments.push(payment);
       this.cedula = 0;
       this.nombres ='';
       this.apellidos ='';
       this.contrato = 'N° ';
       this.salario = 0;
    });
  }

  deletePayment(id){
    const response = confirm('are you sure to delete it?');
    if (response){
        const payments = this.payments;
        this.paymentService.deletePayment(id)
        .subscribe (data => {
          if(data.n == 1){
            for(let i = 0; i < payments.length; i++){
              if(payments[i]._id == id){
                payments.splice(i, 1);
              }
            }
          }
        });
    }
  }


  btnClick= function () {
    this.router.navigate(['/settlement']);
 };
}
