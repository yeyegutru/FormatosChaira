import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isInformationBodyVisible: { [key: string]: boolean } = {
    menu: true,
  };

  // Cambia el estado de visibilidad de una sección específica
  toggleSection(section: string) {
    this.isInformationBodyVisible[section] =
      !this.isInformationBodyVisible[section];
  }
  getArrowIconClass(section: string): string {
    return this.isInformationBodyVisible[section]
      ? 'fas fa-arrow-circle-left click'
      : 'fas fa-arrow-circle-right click';
  }
  isCollapsed(section: string): boolean {
    return !this.isInformationBodyVisible[section];
  }
}
