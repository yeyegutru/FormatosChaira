import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerEditarFormatosService {

  constructor(private http: HttpClient) { }

  getFormatoById(id: string): Observable<any> {
    return this.http.get(`http://api.tu-backend.com/formatos/${id}`);
  }

  updateFormato(id: string, data: any): Observable<any> {
    return this.http.put(`http://api.tu-backend.com/formatos/${id}`, data);
  }
}
