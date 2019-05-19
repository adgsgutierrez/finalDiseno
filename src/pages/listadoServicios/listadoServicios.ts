import { Servicio } from './../../models/models';
import { ServicesProvider } from '../../providers/services/services';
import { Profesional } from '../../models/models';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { editarPersonalModal } from '../editarPersonal/editarPersonal';

@Component({
  selector: 'page-listadoServicios',
  templateUrl: 'listadoServicios.html'
})
export class listadoServiciosPage {

  private servicios : Servicio[] = [];
  private load : boolean = false;

  constructor(public navCtrl: NavController , private service : ServicesProvider , public modalCtrl: ModalController) {

  }

  ionViewDidEnter(){
   this.load = true;
    this.service.getServicios().valueChanges().subscribe(
      (servicios)=>{
        this.servicios = servicios;
        this.load = false;
      }
    );
  }

  public eliminar(servicios : Servicio):void{
    this.service.delecteProfesional(servicios);
  }

  public editar(profesional : Profesional){
    let profileModal = this.modalCtrl.create(editarPersonalModal, { "profesional": profesional });
    profileModal.present();
    profileModal.onDidDismiss(
      (profesional)=>{
        console.log(profesional);
        this.service.updateProfesional(profesional);
      }
    );
  }

}
