import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
// import { routes } from "./app.routes";
import{routes} from './app.routes';

export const appConfig : ApplicationConfig = {
    providers: [
        provideRouter(routes)
    ]
    

};

// 2. se configura este appConfig para poder dar las rutas por las cuales se va a manejar nuestra aplicacion 