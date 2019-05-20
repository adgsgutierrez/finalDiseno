import { editarServicioModal } from './../editarServicio/editarServicio';
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

  public eliminar(servicio : Servicio):void{
    this.service.deleteServicio(servicio);
  }

  public editar(servicio : Servicio){
    let profileModal = this.modalCtrl.create(editarServicioModal, { "servicio": servicio });
    profileModal.present();
    profileModal.onDidDismiss(
      (servicio)=>{
        console.log(servicio);
        if(servicio != null){
        this.service.updateServicio(servicio);
        }
      }
    );
  }

}
