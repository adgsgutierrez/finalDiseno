import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Venta } from '../../models/models';
import { ServicesProvider } from '../../providers/services/services';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class historicoPage {

  private ventas : Venta[] = [];
  private load : boolean = false;

  constructor(public navCtrl: NavController, private service : ServicesProvider) {

  }

  ionViewDidEnter(){
    this.load = true;
     this.service.getVentas().valueChanges().subscribe(
       (professionals)=>{
         this.ventas = professionals;
         this.load = false;
       }
     );
   }
}
