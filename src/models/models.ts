//Objetos DAO (Data Access Object)
export interface userLogin {
    user : string;
    password: string;
}
export interface userRegister {
    apellido: string;
    clave: string;
    correo: string;
    nombre : string;
    tipo: string;
    usuario: string;
}

export interface Profesional{
  id : string;
  nombre : string ;
  apellido : string ;
  edad : string ;
  experiencia : string ;
  descripcion : string ;
}

export interface Venta {
  valor : number,
  descripcion : string,
  fecha : string
}

export interface Servicio{
  nombre : string;
  precio : number;
  tiempo : string;
}

export interface Reservacion{
  nombre : string ;
  servicio : string ;

}

export interface Calendario{
  date : string ;
  hora : string ;
  professional : Array<Reservacion>;

}
