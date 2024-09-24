import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() texto!:string ;
  @Input() arrowIconClass: string = ''; 
  @Output() iconClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() isCollapsed: boolean = false;

  onBackClick(event: Event): void {
    event.stopPropagation(); // Detiene la propagación del clic
    this.iconClick.emit();  // Emite el evento para el componente padre
  }
}
