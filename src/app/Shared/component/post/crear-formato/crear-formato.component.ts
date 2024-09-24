import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-formato',
  templateUrl: './crear-formato.component.html',
  styleUrls: ['./crear-formato.component.scss']
})
export class CrearFormatoComponent implements OnInit {

  formulario: FormGroup = {} as FormGroup;
  tiposFormatos: string[] = ['Formato A', 'Formato B', 'Formato C']; // Lista de tipos de formatos

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      tipoFormato: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
