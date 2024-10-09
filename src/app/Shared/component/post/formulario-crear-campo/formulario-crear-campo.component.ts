import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalFuncionService } from 'src/app/Core/services/modal-funcion.service';

@Component({
  selector: 'app-formulario-crear-campo',
  templateUrl: './formulario-crear-campo.component.html',
  styleUrls: ['./formulario-crear-campo.component.scss']
})
export class FormularioCrearCampoComponent implements OnInit {
  @Input() CrearCampos: boolean = false;
  @Input() CrearPasos: boolean = false;

  textoColor: boolean = false;
  campos: Array<string> = []; // Solo un arreglo para los nombres de los campos

  // Definición de FormControl para el nombre del campo
  nuevoCampoFormControl: FormControl<string | null> = new FormControl('', Validators.required);

  constructor(private ModalService: ModalFuncionService) { }

  ngOnInit() {
    // No necesitamos agregar controles adicionales al formulario
  }

  crearCampo(): void {
    this.nuevoCampoFormControl.markAsTouched();
    // Validación para agregar un nuevo valor a la lista
    if (this.nuevoCampoFormControl.valid && this.nuevoCampoFormControl.value?.trim() !== '') {

      // Agregar al array de campos solo el valor del nombre
      this.campos.push(this.nuevoCampoFormControl.value!);


      // Mostrar el mensaje de confirmación
      this.ModalService.TituloModal("Mensaje");
      this.ModalService.openMensajeMotivoRechazo("Se ha creado con éxito el campo: " + this.nuevoCampoFormControl.value);
      this.ModalService.ActiveClass();
      // Imprimir el array para verificar
      console.log('Campos:', this.campos);

      // Limpiar el campo después de agregar
      this.nuevoCampoFormControl.reset();
    }
  }
  crearPasos(): void {
    this.nuevoCampoFormControl.markAsTouched();
    // Validación para agregar un nuevo valor a la lista
    if (this.nuevoCampoFormControl.valid && this.nuevoCampoFormControl.value?.trim() !== '') {

      // Agregar al array de campos solo el valor del nombre
      this.campos.push(this.nuevoCampoFormControl.value!);


      // Mostrar el mensaje de confirmación
      // this.ModalService.TituloModal("Mensaje");
      this.ModalService.openMensajeMotivoRechazo("Se ha creado con éxito el campo: " + this.nuevoCampoFormControl.value);
      this.ModalService.ActiveClass();
      // Imprimir el array para verificar
      console.log('Campos:', this.campos);

      // Limpiar el campo después de agregar
      this.nuevoCampoFormControl.reset();
    }
  }

   // Método para abrir el modal y pasarle el campo
   OpenModalCrearCampos() {
    this.ModalService.openCrearCampos();
  }
   // Método para abrir el modal y pasarle el campo
   OpenModalCrearPasos() {
    this.ModalService.openCrearCampos();
  }
}
