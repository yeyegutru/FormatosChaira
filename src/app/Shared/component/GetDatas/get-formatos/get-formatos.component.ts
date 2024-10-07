import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
import { Component, OnInit } from '@angular/core';
import { IFormatos } from 'src/app/Core/models/Formatos';
import { Accion, getEntityPropiedades } from 'src/app/Core/models/Tabla-Columna';
import { LlenarDataTableService } from 'src/app/Core/services/llenar-data-table.service';
import { Router } from '@angular/router';

@Component({
  providers:[LlenarDataTableService],
  selector: 'app-get-formatos',
  templateUrl: './get-formatos.component.html',
  styleUrls: ['./get-formatos.component.scss'],

})
export class GetFormatosComponent  implements OnInit{
  constructor(private llenarData: LlenarDataTableService, private Modalservice:ModalFuncionService,private router: Router) {}
  Formatos_List: IFormatos[] = [];
  columnas: string[] = [];
  title: string = 'Formatos';
  Vclases : string = "";
  
  ngOnInit(): void {
    this.Vclases="table-1"; 
    this.columnas = getEntityPropiedades('Formatos');
    this.llenarData.obtenerFormatosList().subscribe((data) => {
      this.Formatos_List = data;
      console.log(this.Formatos_List);
    });
  }
  onAction(accion: Accion) {
    if(accion.accion=='ver'){
      this.VerFormatos(accion.fila);
    }else if (accion.accion == 'editarFormato') {
      
      this.editarFormato(accion.fila);
    } else if ((accion.accion = 'Eliminar')) {
      this.eliminar(accion.fila.Codigo);
    }
  }

  editarFormato(data: any) {
    this.router.navigate(['/EditarFormatos'], { state: { formato: data } });
  }
  eliminar(nombre: string) {
    console.log('Eliminar', nombre);
    this.openModalMensajeRechazado("Esto es un mensaje de prueba jajajajaja"+nombre);
  }
  VerFormatos(objeto:any){
    
    this.openModalFormatosVisual(objeto);
    console.log('Ver', objeto.Codigo);  // logica para ver el detalle del registro seleccionado
  }

  openModalFormatosVisual(format:any){
    this.Modalservice.TituloModal("Visualizacion de Formatos");
    this.Modalservice.openFormato(format);
  }

  openModalMensajeRechazado(mensaje:string){
    this.Modalservice.TituloModal("Motivo de Rechazo Formato");
    this.Modalservice.openMensajeMotivoRechazo(mensaje);
    this.Modalservice.open();
  }
   
}
