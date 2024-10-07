import { Component, Input, OnInit } from '@angular/core';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
// Funcionabilidad con servicio para el Modal 
  @Input() isVisible: boolean =false;
  @Input() titulo!: string;
  @Input() formatData: any;
  @Input() mensajeMotivoRechazo!: string;
  
constructor(private ModalService:ModalFuncionService){
}
ngOnInit() {
   // Escuchar los cambios en la visibilidad del modal
  this.ModalService.GetModalStatus().subscribe((isVisible) => {
    this.isVisible = isVisible;
  });
  // escuchar los cambios de titulo
  this.ModalService.getTituloModal().subscribe((titulo)=>{
    this.titulo = titulo;
  });
  // escuchar los cambios de mensaje de motivo de rechazo
  this.ModalService.getMensajeMotivoRechazo().subscribe((mensaje)=>{
    this.mensajeMotivoRechazo=mensaje;
  });

  // Escuchar los datos del formato seleccionado
  this.ModalService.getSelectedFormat().subscribe((format) => {
    this.formatData = format;
  });
}
closeModal(){
  this.ModalService.close();
}

}
