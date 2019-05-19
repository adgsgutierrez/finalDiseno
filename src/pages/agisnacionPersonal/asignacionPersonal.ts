import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DatePickerProvider } from 'ionic2-date-picker';
import { Calendario, Reservacion } from '../../models/models';

@Component({
  selector: 'page-asignacionPersonal',
  templateUrl: 'asignacionPersonal.html'
})
export class asignacionPersonalPage {

  public servicios : Calendario[];

  constructor(public navCtrl: NavController , public modalCtrl: ModalController, private datePickerProvider: DatePickerProvider , private service : ServicesProvider) {
    this.servicios = [];
  }
  ionViewDidEnter(){
    this.showCalendar();
  }

  private showCalendar():void{
    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl);
    dateSelected.subscribe((date : Date) =>{
      const dateString : string = date.getUTCFullYear() + "/" + ( (date.getMonth()>9)?date.getMonth():"0"+date.getMonth() ) + "/"+ ( (date.getDay()>9)?date.getDay():"0"+date.getDay());
      this.service.getSearchServiceToDate(dateString).valueChanges().subscribe(
        (services)=>{
          console.log(services);
          this.loadInfo(services);
        }
      );
    });
  }

  private loadInfo(servicio : Calendario[]):void{
    for(let index = 0 ; index < 13 ; index ++){
        const hora = ((index + 8) < 10)?('0'+(index + 8)+':00'):(index + 8)+':00';
        const filter : any[] = servicio.filter((item : Calendario) => {
          return (item.hora.indexOf(hora) > -1)?item.professional:[]
        });
        this.servicios.push({
          hora : hora,
          date : '',
          professional : filter
        });
    }
  }

}
