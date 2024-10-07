import { Component, Input } from '@angular/core';
import { ViewFormatosComponent } from '../view-formatos/view-formatos.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/Shared/component/components.module';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-verformatos',
  templateUrl: './verformatos.component.html',
  styleUrls: ['./verformatos.component.scss'],
  standalone:true,
  imports: [ComponentsModule,ViewFormatosComponent,CommonModule,RouterModule]
})
export class VerformatosComponent {
  isInformationBodyVisible: { [key: string]: boolean } = {
    section1:true,
    section2:true,
    section3:true
  };

  // Método para alternar visibilidad
  toggleSection(section: string) {
    this.isInformationBodyVisible[section] =
      !this.isInformationBodyVisible[section];
  }

  // Método para gestionar el ícono dinámicamente
  getArrowIconClass(section: string): string {
    return this.isInformationBodyVisible[section]
      ? 'fas fa-chevron-up'
      : 'fas fa-chevron-down';
  }


 

}
