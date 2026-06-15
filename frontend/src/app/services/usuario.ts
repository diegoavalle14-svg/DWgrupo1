import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // URLs de los archivos PHP que funcionan como endpoints del backend.
  private apiUrl = 'http://localhost/DWgrupo1/backend/guardar.php';
  private listarUrl = 'http://localhost/DWgrupo1/backend/listar.php';
  private actualizarUrl = 'http://localhost/DWgrupo1/backend/actualizar.php';
  private eliminarUrl = 'http://localhost/DWgrupo1/backend/eliminar.php';

  constructor(private http: HttpClient) { }

  // CREATE: envia los datos del formulario para registrar un usuario.
  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post(this.apiUrl, datosUsuario);
  }

  // READ: obtiene todos los usuarios guardados para mostrarlos en el reporte.
  listarUsuarios(): Observable<any> {
    return this.http.get(this.listarUrl);
  }

  // UPDATE: envia el usuario editado al backend para modificarlo en MySQL.
  actualizarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.actualizarUrl, usuario);
  }

  // DELETE: envia el id del usuario que se desea eliminar.
  eliminarUsuario(id: number): Observable<any> {
    return this.http.post(this.eliminarUrl, { id });
  }
}
