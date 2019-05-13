import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Venta } from '../../models/models';
import { ServicesProvider } from '../../providers/services/services';
import { historicoPage } from '../historico/historico';

@Component({
  selector: 'page-crearVenta',
  templateUrl: 'crearVenta.html'
})
export class crearVentaPage {

  private venta : Venta;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private service: ServicesProvider) {
    const date = new Date();
    const dateString = date.getUTCFullYear() + "/" + ( (date.getMonth()>9)?date.getMonth():"0"+date.getMonth() ) + "/"+ ( (date.getDay()>9)?date.getDay():"0"+date.getDay()) + " " + date.getHours() + ":"+ date.getMinutes()+":"+date.getSeconds();
    this.venta = {
      descripcion : '',
      valor : 0,
      fecha : dateString
    }
  }

  ionViewDidEnter(){

  }

  public guardarVenta(){
    if(this.venta.valor !== 0 && this.venta.valor !== undefined){
      this.service.setVenta(this.venta);
      this.navCtrl.setRoot(historicoPage);
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
