import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];

  onEdit(item: string): void {
    console.log('Edit:', item);
    // Aquí puedes añadir la lógica para editar el item
  }

  onDelete(item: string): void {
    console.log('Delete:', item);
    // Aquí puedes añadir la lógica para eliminar el item
  }
}
