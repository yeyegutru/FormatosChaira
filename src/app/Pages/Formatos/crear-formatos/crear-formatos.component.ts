// import { Accion } from './../../../Core/models/Tabla-Columna';
import { Component, Input } from '@angular/core';
import { ComponentsModule } from 'src/app/Shared/component/components.module';
import { ViewFormatosComponent } from '../view-formatos/view-formatos.component';
import { CommonModule } from '@angular/common';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
import { HttpClientModule } from '@angular/common/http';
import { Accion2 } from 'src/app/Shared/component/pasos/pasos.component';
// import { Accion2 } from 'src/app/Shared/component/pasos/pasos.component';
@Component({
  selector: 'app-crear-formatos',
  templateUrl: './crear-formatos.component.html',
  styleUrls: ['./crear-formatos.component.scss'],
  standalone: true,
  imports: [ComponentsModule, ViewFormatosComponent, CommonModule, HttpClientModule]
})
export class CrearFormatosComponent {

  constructor(private ModalService: ModalFuncionService) { }
  array:any[]=[{'id':1,'vector':["paso1","paso2"]},{'id':2,'vector':["paso3","paso4"]},{'id':0,'vector':["paso5","paso6"]}];
  itemsCampos:string[]=["Campo 1", "Campo 2", "Campo 3", "Campo 4"];
  items:string[]=[];
  crearFormato(){
    
  };
  onAction(accion:string, fila:string[] ) {
    if (accion === 'ver') {
      // this.items=['paso1', 'paso2','paso3','paso4','paso5'];
      // this.VerPasos(this.items);
      // alert('Ver');
      this.cargardatosPasos(parseInt(fila[0]));
    } else if (accion == 'editarFormato') {

      this.editarPasos();
    } else if ((accion= 'Eliminar')) {
      this.eliminarPasos();
    };
  }

  VerPasos(pasos: string[]) {
    this.ModalService.openPasosFormatos(pasos,"Detalle Pasos Formatos");
  }
  editarPasos() { }
  eliminarPasos() { }

  // // aqui es la logica para la funcionalidad de las pestañas
  isInformationBodyVisible: { [key: string]: boolean } = {
    section1: true,
    section2: true,
    section3: true,
  };

  // Cambia el estado de visibilidad de una sección específica
  toggleSection(section: string) {
    this.isInformationBodyVisible[section] =
      !this.isInformationBodyVisible[section];
  }

  getArrowIconClass(section: string): string {
    return this.isInformationBodyVisible[section]
      ? 'fas fa-arrow-circle-up click'
      : 'fas fa-arrow-circle-down click';
  }


  // Función para buscar el objeto por ID
buscarPorId(id: number): any {
  return this.array.find(item => item.id === id);
}

cargardatosPasos(id:number)
{
  const objeto=this.buscarPorId(id);
  this.items=objeto.vector;
}

handleClick():void{
  this.itemsCampos=["Campo 1", "Campo 2", "Campo 3", "Campo 4"];
}
OpenModalCrearCampos(){
  this.ModalService.openCrearCampos();
}

OpenModalCrearPasos(){
  this.ModalService.OpenCrearPasos();
}
 // Método que recibe el nuevo campo desde el modal
 
}
