import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { ListadoNavesComponent } from './listado-naves/listado-naves.component';
import { ListadoPlanetasComponent } from './listado-planetas/listado-planetas.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';

export const routes: Routes = [

    {path: '', component: AppComponent},
    {path: 'personajes', component: ListadoPersonajesComponent},
    {path: 'personajes/:id', component: DetallePersonajeComponent},
    {path: 'naves', component: ListadoNavesComponent},
    {path: 'planetas', component: ListadoPlanetasComponent},


];
