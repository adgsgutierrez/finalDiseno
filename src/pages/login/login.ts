import { Component } from '@angular/core';
import { NavController, NavParams , AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Utils } from '../../utils/utils';
import { userLogin } from '../../models/models';
import { RegisterPage } from '../register/register';
import { revisionPedidosPage } from '../revisionPedidos/revisionPedidos';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  private usuario : userLogin;
  //Constructor inyecta las dependencias NavParams, NavController y AlertCotnroler
  //iInicializa los objetos que se utilizaran
  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController  ) {
    this.usuario = {
      user : '',
      password : ''
    }
  }

  private iniciar():void{
    if(Utils.validateInputs(this.usuario)){
      //Condicional temporal para validar usuario
      if(this.usuario.user === "lesli" && this.usuario.password === "123456"){
        this.navCtrl.setRoot(revisionPedidosPage);
      }else{
        const alert = this.alertCtrl.create({
          title: 'Ups!',
          subTitle: 'El usuario y/o contraseña son incorrectos.',
          buttons: ['OK']
        });
        alert.present();
      }
    //Condicional para validar los campos
    }else{
      const alert = this.alertCtrl.create({
        title: 'Ups!',
        subTitle: 'Te hizo falta información, completala para continuar.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  private registrar():void{
    //Redireccionamiento a la pagina de registro
    this.navCtrl.setRoot(RegisterPage);
  }
}
