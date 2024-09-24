import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormatos} from '../models/Formatos';

@Injectable({
  providedIn: 'root'
})
export class LlenarDataTableService {

  constructor(private http:HttpClient ) { }

  obtenerFormatosList(): Observable<IFormatos[]>{
    // traer la informacion que esta en la carpeta data que es el JSON
  return this.http.get<IFormatos[]>("assets/data/formatos-list.json")
  }  

 
}
