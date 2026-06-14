import { Routes } from '@angular/router';

// Importamos los componentes que se van a mostrar en cada ruta.
import { Inicio } from './pages/inicio/inicio';
import { Usuarios } from './pages/usuarios/usuarios';
import { Reporte } from './pages/reporte/reporte';

export const routes: Routes = [
  {
    // Ruta principal: cuando se abre http://localhost:4200
    path: '',
    component: Inicio,
  },
  {
    // Ruta para la pantalla donde se registran, editan y eliminan usuarios.
    path: 'usuarios',
    component: Usuarios,
  },
  {
    // Ruta para mostrar el reporte o listado de usuarios.
    path: 'reporte',
    component: Reporte,
  },
  {
    // Si el usuario escribe una ruta incorrecta, Angular lo manda al inicio.
    path: '**',
    redirectTo: '',
  },
];