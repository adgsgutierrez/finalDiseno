import { ServicesProvider } from './../../providers/services/services';
import { Servicio, Profesional, Calendario } from './../../models/models';
import { LoginPage } from './../login/login';
import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams, ModalController , AlertController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  @ViewChild(Slides) slides: Slides;
  public servicios : Servicio[];
  public profesionales : Profesional[];
  public horas : Calendario [];

  private serviceSelected : Servicio;
  private profesionalSelected : Profesional;
  private horaSelected : Calendario;
  private diaSelected : string;

  constructor(public navCtrl: NavController, public navParams: NavParams , private service : ServicesProvider,
    public modalCtrl: ModalController, private datePickerProvider: DatePickerProvider , public alertCtrl: AlertController) {
    this.servicios = [];
    this.profesionales = [];

  }

  public cerrarSession():void{
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidEnter(){
    this.service.getServicios().valueChanges().subscribe(
      (servicios)=>{
        this.servicios = servicios;
      }
    );
    this.service.getProfessional().valueChanges().subscribe(
      (profesionales)=>{
        this.profesionales = profesionales;
      }
    );
  }

  public itemService( servicio : Servicio):void{
    console.log(servicio);
    this.serviceSelected = servicio;
    this.slides.slideTo(1, 500);
  }

  public itemProfesional(profesional : Profesional):void{
    console.log(profesional);
    this.profesionalSelected = profesional;
    this.slides.slideTo(2, 500);
    let datePickerOption: DatePickerOption = {
      minimumDate: new Date(), // the minimum date selectable
      maximumDate: new Date('2100-12-31'), // the maximum date selectable
      defaultDate: new Date(),
    };
    this.horas = [];
    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
    dateSelected.subscribe((date : Date) =>{
      const dateString : string = date.getUTCFullYear() + "/" + ( ( (date.getMonth()+1)>9)?(date.getMonth()+1):"0"+(date.getMonth()+1) ) + "/"+ ( (date.getDate()>9)?date.getDate():"0"+date.getDate());
      this.diaSelected = dateString;
      this.service.getSearchServiceToDate(dateString).valueChanges().subscribe(
        (services)=>{
          console.log(services);
          this.loadInfo(services);
        }
      );
    });

  }

  public itemSelectService(hora : Calendario):void{
    this.horaSelected = hora;

    //Mostrando datos
    let reservacion : Calendario = {
      date : this.diaSelected ,
      hora : this.horaSelected.hora,
      professional : []
    }
    reservacion.professional.push({
      nombre : ( this.profesionalSelected.nombre + ' ' + this.profesionalSelected.apellido ),
      servicio : this.serviceSelected.nombre
    });

    console.log("reservacion" , reservacion);
    const confirm = this.alertCtrl.create({
      title: 'Adquirir el servicio?',
      message: 'Esta seguro que desea adquirir el servicio '+reservacion.professional[0].servicio+' con el profesional '+reservacion.professional[0].nombre+' el dia ' +reservacion.date+' a las '+reservacion.hora+'?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.slides.slideTo(0, 500);
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.save(reservacion);
          }
        }
      ]
    });
    confirm.present();
  }

  private save(reservacion : Calendario):void{
    this.service.setCalendar(reservacion);
    this.slides.slideTo(0, 500);
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
        this.horas.push({
          hora : hora,
          date : '',
          professional : filter
        });
    }
  }
}
