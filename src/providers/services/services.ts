import { Profesional } from './../../models/models';
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
    let database = this.database.list(DATABASE.PROFFESSIONAL);
    database.push(profesional);
  }

  public setUsuario( user : userRegister ){
    let database = this.database.list(DATABASE.USERS);
    database.push(user);
  }

  public getProfessional():AngularFireList< Profesional >{
    return this.database.list(DATABASE.PROFFESSIONAL);
  }
}
