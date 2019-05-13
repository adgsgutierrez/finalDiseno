
export class Utils{
    //Función validadora de datos 
    public static validateInputs(objeto : any):boolean{
        const objectKey = Object.keys(objeto);
        for(let index = 0  ; index < objectKey.length ; index ++){
            if(objeto[objectKey[index]]== ''){
                return false;
            }
        }
        return true;
    }
}