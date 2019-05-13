import { Component } from '@angular/core';
import { NavController, NavParams , AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Utils } from '../../utils/utils';
import { userRegister } from '../../models/models';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  
  private usuario : userRegister;
  //Constructor inyecta las dependencias NavParams, NavController y AlertCotnroler
  //iInicializa los objetos que se utilizaran
  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController  ) {
    this.usuario = {
      name: '',
      lastname: '',
      email: '',
      user : '',
      password : '',
      forgotpassword: ''
    }
  }

  private ingresar():void{
    //Condicional para validar los campos
    if(Utils.validateInputs(this.usuario)){
      this.navCtrl.setRoot(HomePage);
    }else{
      const alert = this.alertCtrl.create({
        title: 'Ups!',
        subTitle: 'Te hizo falta información, completala para continuar.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  private login():void{
    //Redireccionamiento a la pagina de registro
    this.navCtrl.setRoot(LoginPage);
  }

}
