import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
})
export class ContenedorComponent {
  @Input() section!: string;
  @Input() texto!: string;
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
