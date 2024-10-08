import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
@Input() clases_btn! : string ; 
@Input() texto! : string ; 
@Input() Id! : string ; 
@Input() clases_icono! : string; 
@Output() click:EventEmitter<void> = new EventEmitter<void>();

// Método que se llama cuando se hace clic en el botón
onClick(): void {
  this.click.emit(); // Emitimos el evento 'clicked' para notificar al componente padre
}
}
