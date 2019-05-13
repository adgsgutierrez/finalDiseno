import { ServicesProvider } from './../../providers/services/services';
import { Profesional } from './../../models/models';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-listadoPersonal',
  templateUrl: 'listadoPersonal.html'
})
export class listadoPersonalPage {

  private profesionales : Profesional[] = [];
  private load : boolean = false;

  constructor(public navCtrl: NavController , private service : ServicesProvider) {

  }

  ionViewDidEnter(){
   this.load = true;
    this.service.getProfessional().valueChanges().subscribe(
      (professionals)=>{
        this.profesionales = professionals;
        this.load = false;
      }
    );
  }

}
