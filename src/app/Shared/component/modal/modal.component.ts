import { Component, Input } from '@angular/core';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
// Funcionabilidad con servicio para el Modal 
  @Input() isVisible: boolean =false;
  @Input() titulo!: string;

constructor(private ModalService:ModalFuncionService){
}

closeModal(){
  this.ModalService.close();
}

}
