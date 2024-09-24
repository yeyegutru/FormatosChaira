import {Keys_Formatos } from "./Formatos";

export interface Accion<t =any>{
    accion: string; //eliminar - editar
    fila?: t //registro
 }

export const getEntityPropiedades = (entidad: string):Array<any>=> {
    let resultados : any=[];
    let clase : any;

    switch(entidad){
        case 'Formatos':
        clase= new Keys_Formatos();
        break;
        // case 'mouse':
        // clase=new mouseResponse();        
    }

    if(clase){
        resultados= Object.keys(clase);
    }
    return resultados
}