import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalFuncionService {
private modalVisibility = new Subject<boolean>();


open(){
  this.modalVisibility.next(true);
}
close(){
  this.modalVisibility.next(false);
}
GetModalStatus() {
  return this.modalVisibility.asObservable();
}
}
