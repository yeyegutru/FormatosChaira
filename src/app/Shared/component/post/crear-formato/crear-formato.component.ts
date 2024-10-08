import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Para capturar el id de la ruta

@Component({
  selector: 'app-crear-formato',
  templateUrl: './crear-formato.component.html',
  styleUrls: ['./crear-formato.component.scss']
})
export class CrearFormatoComponent implements OnInit {
  @Output() clicked: EventEmitter<void> = new EventEmitter();
  // Variables que se utilizan 
  formatoForm: FormGroup;
  tiposFormatos: string[] = ['Formato A', 'Formato B', 'Formato C']; // Lista de tipos de formatos
  formatoId: string | null = null; // Id del formato que se editará
  isEditMode: boolean = false; // Variable para controlar si está en modo edición

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, // Para obtener parámetros de la URL
    private router: Router
  ) {
    // Inicializa el grupo de formulario en el constructor
    this.formatoForm = this.fb.group({
      nombre: ['', Validators.required], // Inicializa el control 'nombre'
      codigo: ['', Validators.required], // Inicializa el control 'codigo'
      tipoFormato: ['', Validators.required] // Inicializa el control 'tipoFormato'
    });
  }


  ngOnInit(): void {
   
    // Inicializamos el formulario
    this.formatoForm = this.fb.group({
      Nombre: ['', Validators.required],
      Codigo: ['', Validators.required],
      tipoFormato: ['', Validators.required]
    });

    if (history.state.formato) {
      this.isEditMode=true;
      // // Obtener el id desde la ruta
      // this.formatoId = this.route.snapshot.paramMap.get('id') || "";

      // // Llamar a un servicio para obtener el formato por el id
      // this.cargarFormato(this.formatoId);
      const formatoData = history.state.formato;
      if (formatoData) {
        // alert(JSON.stringify(formatoData)); // Aquí tienes el objeto completo
        this.cargarFormatoTabla(formatoData);
      } else {
        console.log('No hay datos disponibles');
      }
    }
  }
  // Metodo para crear 
  onSubmit(): void {
    if (this.formatoForm.valid) {
      console.log(this.formatoForm.value);
      alert(JSON.stringify(this.formatoForm.value))
    } else {
      // Marcar todos los controles como tocados para activar los mensajes de error
      this.markAllAsTouched();
      alert('Formulario no válido');
    }
  }
  // Metodo para editar 
  onSubmitEdit() {
 
    if (this.formatoForm.valid) {
      const datosFormato = this.formatoForm.value;
      // Aquí llamas a un servicio para actualizar el formato en el backend
      console.log('Datos a actualizar:', datosFormato);
      // Luego rediriges a la tabla o lista de formatos
      this.router.navigate(['/formatos']);
    }
  }

  

  // Función para marcar todos los controles como tocados
  markAllAsTouched(): void {
    Object.keys(this.formatoForm.controls).forEach(control => {
      this.formatoForm.get(control)?.markAsTouched();
    });
  }

  

  cargarFormato(id: string) {
    // Simulación de la carga de datos.
    const formatos = [
      {
        id: '4',
        nombre: 'Formato Ejemplo',
        codigo: 'FT-1234541',
        tipoFormato: 'Formato A'
      },
      {
        id: '1',
        nombre: 'Formato Ejemplo2',
        codigo: 'FT-1567',
        tipoFormato: 'Formato B'
      },
      {
        id: '15',
        nombre: 'Formato Ejemplo3',
        codigo: 'FT-123',
        tipoFormato: 'Formato C'
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

  cargarFormatoTabla(object:any): void {
    if (object) {
      // Actualiza los valores del formulario con los datos del formato encontrado
      this.formatoForm.patchValue(object);
    } else {
      alert('Formato no encontrado');
      // Aquí podrías manejar el caso de que no se encuentre el formato con el ID proporcionado.
    }
  }

  handleClick(): void {
    this.clicked.emit(); // Emitir el evento hacia arriba
  }



}
