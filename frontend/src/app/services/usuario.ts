import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // ATENCIÓN: Esta URL es temporal. 
  // El Integrante 3 debe decirte cuál es la URL exacta de su archivo PHP.
  private apiUrl = 'http://localhost/tu_proyecto_php/registrar.php';

  constructor(private http: HttpClient) { }

  // Función que recibe los datos del formulario y los envía por POST
  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post(this.apiUrl, datosUsuario);
  }
}