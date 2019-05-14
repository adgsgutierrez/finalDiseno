import { ServicesProvider } from './../../providers/services/services';
import { Profesional } from './../../models/models';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { editarPersonalModal } from '../editarPersonal/editarPersonal';

@Component({
  selector: 'page-listadoPersonal',
  templateUrl: 'listadoPersonal.html'
})
export class listadoPersonalPage {

  private profesionales : Profesional[] = [];
  private load : boolean = false;

  constructor(public navCtrl: NavController , private service : ServicesProvider , public modalCtrl: ModalController) {

  }

  ionViewDidEnter(){
   this.load = true;
    this.service.getProfessional().valueChanges().subscribe(
      (professionals)=>{
        this.profesionales = professionals;
        this.load = false;
      }
    );
  }

  public eliminar(profesional : Profesional):void{
    this.service.delecteProfesional(profesional);
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
