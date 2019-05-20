import { asignacionPersonalPage } from './../agisnacionPersonal/asignacionPersonal';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Utils } from '../../utils/utils';
import { userLogin, userRegister } from '../../models/models';
import { RegisterPage } from '../register/register';
import { revisionPedidosPage } from '../revisionPedidos/revisionPedidos';
import { ServicesProvider } from '../../providers/services/services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private usuario: userLogin;
  //Constructor inyecta las dependencias NavParams, NavController y AlertCotnroler
  //iInicializa los objetos que se utilizaran
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private service: ServicesProvider) {
    this.usuario = {
      user: '',
      password: ''
    }
  }

  private iniciar(): void {
    if (Utils.validateInputs(this.usuario)) {
      this.service.getSearchUser(this.usuario.user).valueChanges().subscribe(
        (response) => {
          if (response.length > 0) {
            let flag = false;
            for (let index = 0; index < response.length; index++) {
              if (response[index].clave === this.usuario.password) {
                flag = true;
                sessionStorage.setItem("US", JSON.stringify(response[index]));
                index = response.length;
              }
            }
            if (flag) {
              const user : userRegister = JSON.parse(sessionStorage.getItem("US"));
              if(user.tipo =='A'){
                this.navCtrl.setRoot(asignacionPersonalPage);
              }else{
                this.navCtrl.setRoot(ListPage);
              }
            } else {
              const alert = this.alertCtrl.create({
                title: 'Ups!',
                subTitle: 'El usuario y/o contraseña son incorrectos.',
                buttons: ['OK']
              });
              alert.present();
            }
          } else {
            const alert = this.alertCtrl.create({
              title: 'Ups!',
              subTitle: 'Parece que no estas registrado, intenta registrandote',
              buttons: ['OK']
            });
            alert.present();
          }
        }
      );
      //Condicional para validar los campos
    } else {
      const alert = this.alertCtrl.create({
        title: 'Ups!',
        subTitle: 'Te hizo falta información, completala para continuar.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  private registrar(): void {
    //Redireccionamiento a la pagina de registro
    this.navCtrl.setRoot(RegisterPage);
  }
}
