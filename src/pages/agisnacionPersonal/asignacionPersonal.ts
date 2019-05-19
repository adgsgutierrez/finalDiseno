import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DatePickerProvider } from 'ionic2-date-picker';

@Component({
  selector: 'page-asignacionPersonal',
  templateUrl: 'asignacionPersonal.html'
})
export class asignacionPersonalPage {

  constructor(public navCtrl: NavController , public modalCtrl: ModalController, private datePickerProvider: DatePickerProvider ) {

  }

  showCalendar() {
    const dateSelected =
      this.datePickerProvider.showCalendar(this.modalCtrl);

    dateSelected.subscribe(date =>
      console.log("first date picker: date selected is", date));
  }

  showCalendar2() {
    const dateSelected =
      this.datePickerProvider.showCalendar(this.modalCtrl);

    dateSelected.subscribe(date =>
      console.log("second date picker: date selected is", date));
  }
}
