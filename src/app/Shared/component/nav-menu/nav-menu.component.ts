import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  menus = [
    {
      name: 'Formatos',
      link: 'verformatos',
      submenus: [
        { name: 'Ver formatos', link: 'verformatos' },
        { name: 'Crear formato', link: 'CrearFormatos' },
        { name: 'Editar formato', link: 'editarformato' }
      ]
    },
    {
      name: 'Crear',
      link: 'crear',
      submenus: [
        { name: 'Crear nuevo', link: 'crearnuevo' },
        { name: 'Crear desde plantilla', link: 'crearplantilla' }
      ]
    },
    {
      name: 'Reportes',
      link: 'reportes',
      submenus: [
        { name: 'Ver reportes', link: 'verreportes' },
        { name: 'Crear reporte', link: 'crearreporte' }
      ]
    }
  ];

  isSubMenuOpen = new Array(this.menus.length).fill(true);

  toggleSubMenu(index: number) {
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
    // // Cierra todos los demás submenus
    // for (let i = 0; i < this.isSubMenuOpen.length; i++) {
    //   if (i !== index) {
    //     this.isSubMenuOpen[i] = false;
    //   }
    // }
  }
}
