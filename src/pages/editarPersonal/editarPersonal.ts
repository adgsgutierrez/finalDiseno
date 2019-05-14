import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ViewController } from 'ionic-angular';
import { Profesional } from '../../models/models';
import { Utils } from '../../utils/utils';
import { ServicesProvider } from '../../providers/services/services';
import { listadoPersonalPage } from '../listadoPersonal/listadoPersonal';

@Component({
  selector: 'page-editarPersonal',
  templateUrl: 'editarPersonal.html'
})
export class editarPersonalModal {

  private profesional : Profesional ;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private service: ServicesProvider ,
    params: NavParams , public viewCtrl: ViewController) {
    this.profesional = params.get('profesional');
  }

  public guardarProfesional():void{
    if(Utils.validateInputs(this.profesional)){
      this.viewCtrl.dismiss(this.profesional);
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
