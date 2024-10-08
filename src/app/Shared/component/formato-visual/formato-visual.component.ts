import { Component,OnInit } from '@angular/core';
import { LlenarformatoService } from 'src/app/Core/services/llenarformato.service';
@Component({
  selector: 'app-formato-visual',
  templateUrl: './formato-visual.component.html',
  styleUrls: ['./formato-visual.component.scss']
})
export class FormatoVisualComponent implements OnInit {
  data: any;
  keyheader: string[] = [];
  keybody: string[] = [];
  isFirstIteration: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      "header": {
        "title": "Formato de gestion de productos tecnologicos para el caqueta",
        "CODIGO": "FT-00124-SADAS",
        "ENCARGADO": "YEINNER STIBEN GUEZGUAN TRUJILLO",
        "version": "1",
        "fecha": "17/09/2024",
        "nanais":"verigood"
      },
      "body": 
        {
          "titulo": "Titulo",
          "codigo": "Codigo",
          "version": "Version",
          "titulo2": "Titulo",
          "pasos": ["1", "2", "3", "4"],
          "codigo2": "Codigo",
          "version2": "Version",
          "versionesxx": ["1", "2", "3", "4"],
        }
      
     
    }

    this.keyheader = Object.keys(this.data.header);
    this.keyheader.splice(0,1);
    this.keybody = Object.keys(this.data.body);
    // this.dataService.getData().subscribe((res) => {
    //   this.data = res;
    // });
  }
  ObtenerBooleanArreglo(data : any){
    return Array.isArray(data)
  }

  onFirstIterationComplete() {
    this.isFirstIteration = true; // Cambia el estado a false después de la primera iteración
  }
}
