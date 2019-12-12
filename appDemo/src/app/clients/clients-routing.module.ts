import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  { path: "", component: ListadoComponent },
  { path: "edicion", component: EdicionComponent },
  { path: "nuevo", component: NuevoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
