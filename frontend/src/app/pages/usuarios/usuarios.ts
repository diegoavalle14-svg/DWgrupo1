import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// 1. Importamos tu nuevo servicio
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

  // 2. Inyectamos el servicio en el constructor junto con el FormBuilder
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  enviarDatos() {
    if (this.registroForm.valid) {
      console.log('Enviando datos...', this.registroForm.value);

      // 3. Enviamos los datos al backend y "escuchamos" la respuesta
      this.usuarioService.registrarUsuario(this.registroForm.value).subscribe({
        next: (respuesta) => {
          console.log('¡Éxito! PHP respondió:', respuesta);
          alert('Usuario registrado correctamente');
          this.registroForm.reset(); // Limpia las cajas de texto tras el éxito
        },
        error: (error) => {
          console.error('Error al conectar con PHP:', error);
          alert('Hubo un problema al registrar el usuario. Revisa la consola.');
        }
      });

    }
  }
}