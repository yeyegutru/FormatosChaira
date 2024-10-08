import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { ComponentsModule } from 'src/app/Shared/component/components.module';

@Component({
  selector: 'app-editar-form',
  templateUrl: './editar-form.component.html',
  styleUrls: ['./editar-form.component.scss'],
  standalone: true,
  imports: [ComponentsModule,RouterModule,CommonModule,HttpClientModule]
})
export class EditarFormComponent {
  constructor(){}
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
