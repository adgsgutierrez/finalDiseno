import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Servicio } from '../../models/models';
//import { Utils } from '../../utils/utils';
import { ServicesProvider } from '../../providers/services/services';
//import { listadoServiciosPage } from '../listadoServicios/listadoServicios';

@Component({
  selector: 'page-crearServicios',
  templateUrl: 'crearServicios.html'
})
export class crearServiciosPage {

  private servicio : Servicio ;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private service: ServicesProvider) {
    this.servicio = {
      nombre : '',
      precio : 0,
      tiempo : ''
    }
  }

  public guardarProfesional():void{
    console.log(this.servicio);
  //   if(Utils.validateInputs(this.servicio)){
  //     this.service.setProfessional(this.servicio);
  //     this.navCtrl.setRoot(listadoServiciosPage);
  //   }else{
  //     const alert = this.alertCtrl.create({
  //       title: 'Ups!',
  //       subTitle: 'Te hizo falta información, completala para continuar.',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  }

}
