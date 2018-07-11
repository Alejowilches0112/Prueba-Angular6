import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//modules
import { PaymentComponent } from './components/payment/payment.component';
import { SettlementComponent } from './components/settlement/settlement.component';

const routes: Routes =[
  {path: '', redirectTo: '/payment', pathMatch: 'full'},
  {path: 'payment', component:PaymentComponent},
  {path: 'settlement', component:SettlementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
