// import { EditarFormatoComponent } from './post/editar-formato/editar-formatos.component';
// import { EditarFormatoComponent } from './../../Pages/Formatos/editar-formato/editar-formato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { GetFormatosComponent } from './GetDatas/get-formatos/get-formatos.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearFormatoComponent } from './post/crear-formato/crear-formato.component';
import { RouterModule } from '@angular/router';
import { CamposComponent } from './campos/campos.component';
import { PasosComponent } from './pasos/pasos.component';
import { FormatoVisualComponent } from './formato-visual/formato-visual.component';
import { routes } from 'src/app/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarFormatoComponent } from './post/editar-formatos/editar-formatos.component';

@NgModule({
  declarations: [TableComponent,
  ButtonComponent,
  HeaderComponent,
  MenuComponent,
  NavMenuComponent,
  ModalComponent,
  ContenedorComponent,
  GetFormatosComponent,
  CrearFormatoComponent,
  CamposComponent,
  PasosComponent,
  FormatoVisualComponent,
  EditarFormatoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    TableComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    NavMenuComponent,
    ModalComponent,
    ContenedorComponent,
    GetFormatosComponent,
    CrearFormatoComponent,
    PasosComponent,
    FormatoVisualComponent,
    EditarFormatoComponent
  ],
  providers:[
    ModalFuncionService
  ]
})
export class ComponentsModule { }
