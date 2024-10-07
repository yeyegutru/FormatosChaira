import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
import { CommonModule } from '@angular/common';
import { ViewFormatosComponent } from '../view-formatos/view-formatos.component';
import { appConfig } from 'src/app/app.config';
import { ComponentsModule } from 'src/app/Shared/component/components.module';
@Component({
  selector: 'app-mod-formatos',
  templateUrl: './mod-formatos.component.html',
  styleUrls: ['./mod-formatos.component.scss'],
  standalone: true ,
  imports: [ AppComponent, ComponentsModule,CommonModule,ViewFormatosComponent,RouterOutlet],
  providers: [ModalFuncionService],
})
export class ModFormatosComponent {
  // Aqui se Desplica la logica para el Modal :
  isModalVisible = false;

  constructor(private modalService: ModalFuncionService) {
    this.modalService.GetModalStatus().subscribe((status) => {
      this.isModalVisible = status;
    });
  }

  // openModal() {
  //   this.modalService.open();
  // }

  // closeModal() {
  //   this.modalService.close();
  // }

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
