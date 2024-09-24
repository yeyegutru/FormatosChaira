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
@Output() click = new EventEmitter<void>();
}
