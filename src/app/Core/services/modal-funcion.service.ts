import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalFuncionService {
  // Variables para generar visualizacion del modal 
private modalVisibility = new Subject<boolean>();
  // variables para seleccionar formato 
private selectedFormat = new Subject<any>();
// Variables para mensajes de aprobado o rechazo 
private selectedMensaje = new Subject<string>();
// variable para el titulo del modal 
private titulo = new Subject<string>();

private Pasos = new Subject<any[]>();

// funcion para abrir el modal 
open(){
  this.modalVisibility.next(true);
}

TituloModal(title:string){
  this.titulo.next(title);
}

openFormato(format:any){
  this.selectedFormat.next(format);
  this.open();
}

openMensajeMotivoRechazo(mensaje:string){
  this.selectedMensaje.next(mensaje);
}
close(){
  this.modalVisibility.next(false);
  this.resetVariables();  // Limpia las variables cuando cierra el modal
}
GetModalStatus() {
  return this.modalVisibility.asObservable();
}

// Funcion para obtener el formato en la modal 
getSelectedFormat() {
  return this.selectedFormat.asObservable(); // Observable para escuchar el formato
}
// Funcion para obtener el Titulo para la modal.
getTituloModal(){
  return this.titulo.asObservable(); // Observable para escuchar el título del modal
  
}
// Funcion para obtener el mensaje de motivo del rechazo del formato
getMensajeMotivoRechazo(){
  return this.selectedMensaje.asObservable(); // Observable para escuchar el mensaje de motivo del rechazo del formato
};
private resetVariables() {
  this.selectedFormat.next(null);  // Reinicia el formato seleccionado
  this.selectedMensaje.next('');   // Reinicia el mensaje de rechazo
  this.titulo.next('');            // Reinicia el título del modal
}
}
