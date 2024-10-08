import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
// Definimos la interfaz Accion
export interface Accion2 {
  accion: string;
  fila?: string[];
}
@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent  {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Output() action: EventEmitter<Accion2> = new EventEmitter();



  onAction(accion: string, row?: string[]) {
    this.action.emit({ accion: accion, fila: row });
  }


  onEdit(item: string): void {
    console.log('Edit:', item);
    // Aquí puedes añadir la lógica para editar el item
  }

  onDelete(item: string): void {
    console.log('Delete:', item);
    // Aquí puedes añadir la lógica para eliminar el item
  }
}
