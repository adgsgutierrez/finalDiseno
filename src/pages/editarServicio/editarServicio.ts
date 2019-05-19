import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ViewController } from 'ionic-angular';
import { Utils } from '../../utils/utils';
import { ServicesProvider } from '../../providers/services/services';
@Component({
  selector: 'page-editarServicio',
  templateUrl: 'editarServicio.html'
})
export class editarServicioModal {

  private servicio : Servicio ;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private service: ServicesProvider ,
    params: NavParams , public viewCtrl: ViewController) {
    this.servicio = params.get('servicio');
  }

  public guardarServicio():void{
    if(Utils.validateInputs(this.servicio)){
      this.viewCtrl.dismiss(this.servicio);
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
