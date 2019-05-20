import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';
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
    let datePickerOption: DatePickerOption = {
      minimumDate: new Date(), // the minimum date selectable
      maximumDate: new Date('2100-12-31'), // the maximum date selectable
      defaultDate: new Date(),
    };
    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
    dateSelected.subscribe((date : Date) =>{
      const dateString : string = date.getUTCFullYear() + "/" + ( ( (date.getMonth()+1)>9)?(date.getMonth()+1):"0"+(date.getMonth()+1) ) + "/"+ ( (date.getDate()>9)?date.getDate():"0"+date.getDate());
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
        let filter = [];
        for(let aux = 0 ; aux < servicio.length ; aux++){
          if(servicio[aux].hora === hora){
            filter = servicio[aux].professional;
          }
        }
        this.servicios.push({
          hora : hora,
          date : '',
          professional : filter
        });
    }
  }

}
