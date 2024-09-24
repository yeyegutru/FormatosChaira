import { Component, Input, EventEmitter, Output} from '@angular/core';
import { CommonModule, NgFor,NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Accion } from 'src/app/Core/models/Tabla-Columna';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  title = '';
  columnas: string[] = [];
  dataSource: any= [];
  Vclases= '';
@Input() set titulo(title:any){
  this.title=title;
}

@Input() set columns(columns: string[]){
this.columnas=columns;
}
@Input() set data(data:any){
  this.dataSource=data;
}
@Input() set clases(clases:any){
  console.log('this is class table',clases)
this.Vclases=clases;
}

@Output() action : EventEmitter<Accion>=new EventEmitter();

onAction(accion : string, row? :any){
  this.action.emit({accion: accion, fila:row});
}

// Funcion para generar el color de las filas de acuerdo a los estados
getRowClass(data: any): string {
  switch (data) {
      case 'Aprobado':
          return 'aprobado';
      case 'Rechazado':
          return 'rechazado';
      case 'Ajustes':
          return 'ajustes';
      default:
          return '';
  }
}

}
