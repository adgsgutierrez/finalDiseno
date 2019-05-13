import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Profesional } from '../../models/models';
import { Utils } from '../../utils/utils';
import { ServicesProvider } from '../../providers/services/services';
import { listadoPersonalPage } from '../listadoPersonal/listadoPersonal';

@Component({
  selector: 'page-crearPersonal',
  templateUrl: 'crearPersonal.html'
})
export class crearPersonalPage {

  private profesional : Profesional ;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private service: ServicesProvider) {
    this.profesional = {
      nombre : '',
      apellido : '',
      edad : '',
      experiencia : '',
      descripcion : ''
    }
  }

  public guardarProfesional():void{
    if(Utils.validateInputs(this.profesional)){
      this.service.setProfessional(this.profesional);
      this.navCtrl.setRoot(listadoPersonalPage);
    }else{
      const alert = this.alertCtrl.create({
        title: 'Ups!',
        subTitle: 'Te hizo falta información, completala para continuar.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
