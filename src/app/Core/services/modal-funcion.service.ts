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

private Pasos = new Subject<string[]>();
// variable para mostrar la parte de crear Campo
private CrearCampos=new Subject<boolean>();
private CrearPasos=new Subject<boolean>();
private active_class=new Subject<boolean>();

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
// Esta es la funcion que modifica los pasos del formato para que aparescan en el Modal
openPasosFormatos(pasos:string[],titulo :string){
  this.Pasos.next(pasos);
  this.titulo.next(titulo);
  this.open()
}
// Funcion para Abrir el formulario para crear el campo 
openCrearCampos(){
  this.CrearCampos.next(true);
  this.titulo.next("CrearCampos");
  this.open();
}
ActiveClass(){
  this.active_class.next(true);
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

getPasosFormato(){
  return this.Pasos.asObservable(); // Observable para escuchar los pasos del formato
}

getCrearCampos(){
  return this.CrearCampos.asObservable(); // Observable para escuchar la creación de campos
}

getActiveClass(){
  return this.active_class.asObservable(); // Observable para escuchar la clase para mostrar el modal
}


private resetVariables() {
  this.selectedFormat.next(null);  // Reinicia el formato seleccionado
  this.selectedMensaje.next('');   // Reinicia el mensaje de rechazo
  this.titulo.next('');       
  this.Pasos.next([]);     // Reinicia el título del modal
  this.CrearCampos.next(false); // Reinicia la creación de campos
  this.CrearPasos.next(false); // Reinicia la creación de campos
  this.active_class.next(false); // Reinicia la clase para mostrar el modal
}
}
