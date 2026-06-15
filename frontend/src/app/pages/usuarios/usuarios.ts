import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class Usuarios {

  registroForm: FormGroup;

  // Constructor del componente
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {

    // Creación del formulario y validaciones
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });

  }

  // Función que envía los datos al backend
  enviarDatos() {

    if (this.registroForm.valid) {

      this.usuarioService.registrarUsuario(this.registroForm.value).subscribe({

        // Si el registro fue exitoso
        next: (respuesta) => {

          alert('Usuario registrado correctamente');

          // Limpia los campos del formulario
          this.registroForm.reset();

        },

        // Si ocurre un error
        error: (error) => {

          alert('Hubo un problema al registrar el usuario');

        }

      });

    }

  }

}