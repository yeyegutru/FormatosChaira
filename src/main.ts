import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// 1. se realiza el cambio inicial para que no todo dependa de un modulo
bootstrapApplication(AppComponent, appConfig)
.catch(err=>console.error(err));
