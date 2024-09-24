import {Routes} from '@angular/router'

export const routes: Routes =[
    {
        path: '',
        loadChildren: () => import('./Pages/Formatos/Formatos.routes').then (m => m.FORMATOS_ROUTES)
    }
    // ,{
    //     path: 'articles',
    //     loadChildren: ()=> import('esto es un ejemplo').them (m => m.ARTICLES_ROUTES)
    // }
    
]