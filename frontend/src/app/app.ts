import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  // RouterOutlet permite mostrar la pagina segun la ruta.
  // RouterLink permite navegar usando enlaces sin recargar la pagina.
  imports: [RouterOutlet, RouterLink],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}