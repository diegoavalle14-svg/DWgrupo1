import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-reporte',
  imports: [CommonModule, FormsModule],
  templateUrl: './reporte.html',
  styleUrl: './reporte.css',
})
export class Reporte implements OnInit {
  usuarios: any[] = [];
  usuarioEditando: any = null;

  constructor(
    private usuarioService: UsuarioService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // Carga los usuarios desde listar.php cuando se abre la pagina de reporte.
  cargarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (respuesta) => {
        this.usuarios = Array.isArray(respuesta) ? respuesta : [];
        this.cd.detectChanges();
      },
      error: () => {
        alert('Error al cargar el reporte de usuarios');
      }
    });
  }

  // Guarda una copia del usuario seleccionado para editarlo sin cambiar la fila original todavia.
  editarUsuario(usuario: any): void {
    this.usuarioEditando = { ...usuario };
  }

  cancelarEdicion(): void {
    this.usuarioEditando = null;
  }

  // Valida los campos y manda los cambios al endpoint actualizar.php.
  guardarCambios(): void {
    if (
      !this.usuarioEditando.nombre ||
      !this.usuarioEditando.correo ||
      !this.usuarioEditando.telefono
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.usuarioService.actualizarUsuario(this.usuarioEditando).subscribe({
      next: () => {
        alert('Usuario actualizado correctamente');
        this.usuarioEditando = null;
        this.cargarUsuarios();
      },
      error: () => {
        alert('Error al actualizar el usuario');
      }
    });
  }

  // Pide confirmacion y elimina el usuario usando eliminar.php.
  eliminarUsuario(id: number): void {
    const confirmar = confirm('Seguro que desea eliminar este usuario?');

    if (!confirmar) {
      return;
    }

    this.usuarioService.eliminarUsuario(id).subscribe({
      next: () => {
        alert('Usuario eliminado correctamente');
        this.cargarUsuarios();
      },
      error: () => {
        alert('Error al eliminar el usuario');
      }
    });
  }
}
