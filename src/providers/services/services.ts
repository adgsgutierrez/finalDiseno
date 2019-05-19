import { Profesional, Venta, Calendario, Servicio } from './../../models/models';
import { DATABASE } from './../constantes/constantes';

import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { userRegister } from '../../models/models';

@Injectable()
export class ServicesProvider {

  private usuario: AngularFireList<any>;

  constructor(public database: AngularFireDatabase) {

  }

  public getSearchUser( user : string ):AngularFireList< userRegister >{
    return this.database.list(DATABASE.USERS , ref => ref.orderByChild('usuario').equalTo(user));
  }
  public setProfessional( profesional : Profesional ){
    let database: AngularFireList< Profesional > = this.database.list(DATABASE.PROFFESSIONAL);
    database.push(profesional);
  }
  public delecteProfesional(profesional : Profesional){
    this.database.list(DATABASE.PROFFESSIONAL , ref => ref.orderByChild('id').equalTo(profesional.id)).snapshotChanges().subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          this.database.list(DATABASE.PROFFESSIONAL + '/'+snapshot.key).remove();
        });
    });
  }
  public updateProfesional(profesional : Profesional){
    this.database.list(DATABASE.PROFFESSIONAL , ref => ref.orderByChild('id').equalTo(profesional.id)).snapshotChanges().subscribe(snapshots=>{
      snapshots.forEach(snapshot => {
        this.database.list(DATABASE.PROFFESSIONAL ).update(snapshot.key ,profesional);
      });
  });
  }
  public delecteServicio(profesional : Servicio){
    this.database.list(DATABASE.PROFFESSIONAL , ref => ref.orderByChild('id').equalTo(profesional.id)).snapshotChanges().subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          this.database.list(DATABASE.PROFFESSIONAL + '/'+snapshot.key).remove();
        });
    });
  }
  public updateServicio(profesional : Servicio){
    this.database.list(DATABASE.PROFFESSIONAL , ref => ref.orderByChild('id').equalTo(profesional.id)).snapshotChanges().subscribe(snapshots=>{
      snapshots.forEach(snapshot => {
        this.database.list(DATABASE.PROFFESSIONAL ).update(snapshot.key ,profesional);
      });
  });
  }
  public setUsuario( user : userRegister ){
    let database = this.database.list(DATABASE.USERS);
    database.push(user);
  }

  public getProfessional():AngularFireList< Profesional >{
    return this.database.list(DATABASE.PROFFESSIONAL);
  }

  public setVenta( venta : Venta ){
    let database = this.database.list(DATABASE.VENTA);
    database.push(venta);
  }

  public getVentas():AngularFireList< Venta >{
    return this.database.list(DATABASE.VENTA);
  }

  public getSearchServiceToDate( fecha : string ):AngularFireList< Calendario >{
    return this.database.list(DATABASE.RESERVACION , ref => ref.orderByChild('date').equalTo(fecha));
  }

  public setService( servicio : Servicio ){
    let database = this.database.list(DATABASE.SERVICIO);
    database.push(servicio);
  }

  public getServicios():AngularFireList< Servicio >{
    return this.database.list(DATABASE.SERVICIO);
  }

}

