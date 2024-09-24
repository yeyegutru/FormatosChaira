import { Component, Input } from '@angular/core';
import { ComponentsModule } from 'src/app/Shared/component/components.module';
import { ViewFormatosComponent } from '../view-formatos/view-formatos.component';
import { CommonModule } from '@angular/common';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
@Component({
  selector: 'app-crear-formatos',
  templateUrl: './crear-formatos.component.html',
  styleUrls: ['./crear-formatos.component.scss'],
  standalone: true,
  imports: [ComponentsModule,ViewFormatosComponent,CommonModule,]
})
export class CrearFormatosComponent {
  // Aqui se Desplica la logica para el Modal :
  isModalVisible = false;

  constructor(private modalService: ModalFuncionService) {
    this.modalService.GetModalStatus().subscribe((status) => {
      this.isModalVisible = status;
    });
  }

  openModal() {
    this.modalService.open();
  }

  closeModal() {
    this.modalService.close();
  }

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
}
