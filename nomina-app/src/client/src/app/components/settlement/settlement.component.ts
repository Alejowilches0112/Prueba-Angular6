import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SettlementService } from '../../servicessettlement/settlement.service';
import { Settlement } from '../../Settlement';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css'],
  providers:[SettlementService]
})

export class SettlementComponent implements OnInit {
  settlements : Settlement[];

  cedula: number;
  fecha_inicial: string;
  fecha_final: string;
  bonificacion: number;

  constructor(private settlementService: SettlementService
  , private router: Router) {
    this.settlementService.getSettlement().subscribe(res => {
      this.settlements = res
    });
  }

  ngOnInit() {
  }
  addSettlement(event){
    event.preventDefault();
    const newSettlement: Settlement ={
      cedula: this.cedula,
      fecha_inicial: this.fecha_inicial,
      fecha_final: this.fecha_final,
      bonificacion: 3000000*(this.bonificacion/100)

    };

    this.settlementService.addSettlement(newSettlement)
    .subscribe(settlement => {
      this.settlements.push(settlement);
      this.cedula=0;
      this.fecha_inicial="";
      this.fecha_final="";
      this.bonificacion=0;
    });
  }
  deleteSettlement(id){
    const response = confirm('are you sure to delete it?');
    if (response){
        const settlements = this.settlements;
        this.settlementService.deleteSettlement(id)
        .subscribe (data => {
          if(data.n == 1){
            for(let i = 0; i < settlements.length; i++){
              if(settlements[i]._id == id){
                settlements.splice(i, 1);
              }
            }
          }
        });
    }
  }

  btnClick= function () {
    //Escribir PDF
  };

  btnClick1= function () {
    this.router.navigate(['/payment']);
  };

}
