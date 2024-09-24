import { Routes } from "@angular/router";
import { ModFormatosComponent } from "./mod-formatos/mod-formatos.component";
import { CrearFormatosComponent } from "./crear-formatos/crear-formatos.component";
import { VerformatosComponent } from "./verformatos/verformatos.component";




export const FORMATOS_ROUTES : Routes = [
    {path : '', component: ModFormatosComponent, 
        children:[ 
            {path : 'verformatos', component: VerformatosComponent},
            {path : 'CrearFormatos', component : CrearFormatosComponent}
        ]},
   
    // // se puede generar una especie de layout 
    // {
    //     path : 'inicio', component: AdminLayoutComponent, children: [
    //         {path : '', component: InicioComponent},
    //         {path : 'formatos', component: FormatosComponent},
    //     ]
    // }
];