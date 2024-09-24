import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './Shared/component/components.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true, 
  imports:[
    RouterOutlet,
    ComponentsModule
  ]
})
export class AppComponent {
  title = 'FormatosChaira';
}
