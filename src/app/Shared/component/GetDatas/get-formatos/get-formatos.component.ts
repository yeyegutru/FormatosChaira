import { Component, OnInit } from '@angular/core';
import { IFormatos } from 'src/app/Core/models/Formatos';
import { Accion, getEntityPropiedades } from 'src/app/Core/models/Tabla-Columna';
import { LlenarDataTableService } from 'src/app/Core/services/llenar-data-table.service';


@Component({
  providers:[LlenarDataTableService],
  selector: 'app-get-formatos',
  templateUrl: './get-formatos.component.html',
  styleUrls: ['./get-formatos.component.scss'],

})
export class GetFormatosComponent  implements OnInit{
  constructor(private llenarData: LlenarDataTableService) {}
  Formatos_List: IFormatos[] = [];
  columnas: string[] = [];
  title: string = 'Formatos';
  Vclases : string = ""
  ngOnInit(): void {
    this.Vclases="table-1"; 
    this.columnas = getEntityPropiedades('Formatos');
    this.llenarData.obtenerFormatosList().subscribe((data) => {
      this.Formatos_List = data;
      console.log(this.Formatos_List);
    });
  }
  onAction(accion: Accion) {
    if (accion.accion == 'editar') {
      this.editar(accion.fila);
    } else if ((accion.accion = 'Eliminar')) {
      this.eliminar(accion.fila.Codigo);
    }
  }
  editar(objeto: any) {
    console.log('Editar', objeto);
  }
  eliminar(nombre: string) {
    console.log('Eliminar', nombre);
  }
}
