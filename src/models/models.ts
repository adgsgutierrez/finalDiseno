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
