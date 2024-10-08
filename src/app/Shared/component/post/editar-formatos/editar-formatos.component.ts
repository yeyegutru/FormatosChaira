import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Para capturar el id de la ruta

@Component({
  selector: 'app-editar-formatos',
  templateUrl: './editar-formatos.component.html',
  styleUrls: ['./editar-formatos.component.scss']
})
export class EditarFormatoComponent implements OnInit {
  formatoForm: FormGroup;
  tiposFormatos: string[] = ['Tipo 1', 'Tipo 2', 'Tipo 3']; // Los tipos de formato para el dropdown
  formatoId: string | null = null; // Id del formato que se editará

  constructor(

    private fb: FormBuilder,
    private route: ActivatedRoute, // Para obtener parámetros de la URL
    private router: Router
  ) {
    this.formatoForm = this.fb.group({
      nombre: [''],
      codigo: [''],
      tipoFormato: ['']
    });
  }

  ngOnInit(): void {
    // Obtener el id desde la ruta
    this.formatoId = this.route.snapshot.paramMap.get('id')||"";
    
    // Llamar a un servicio para obtener el formato por el id
    this.cargarFormato(this.formatoId);
  }

  cargarFormato(id: string) {
    // Simulación de la carga de datos.
    const formatos = [
      {
        id: '4',
        nombre: 'Formato Ejemplo',
        codigo: 'FT-1234541',
        tipoFormato: 'Tipo 1'
      },
      {
        id: '1',
        nombre: 'Formato Ejemplo2',
        codigo: 'FT-1567',
        tipoFormato: 'Tipo 1'
      },
      {
        id: '15',
        nombre: 'Formato Ejemplo3',
        codigo: 'FT-123',
        tipoFormato: 'Tipo 1'
      }
    ];
  
    // Buscar el formato correspondiente por el ID
    const formatoSeleccionado = formatos.find(formato => formato.id === id);
  
    if (formatoSeleccionado) {
      // Actualiza los valores del formulario con los datos del formato encontrado
      this.formatoForm.patchValue(formatoSeleccionado);
    } else {
      console.error('Formato no encontrado');
      // Aquí podrías manejar el caso de que no se encuentre el formato con el ID proporcionado.
    }
  }
  

  onSubmit() {
    if (this.formatoForm.valid) {
      const datosFormato = this.formatoForm.value;
      // Aquí llamas a un servicio para actualizar el formato en el backend
      console.log('Datos a actualizar:', datosFormato);
      // Luego rediriges a la tabla o lista de formatos
      this.router.navigate(['/formatos']);
    }
  }
 
}
