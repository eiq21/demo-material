import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "clients", loadChildren: () => import("./clients/clients.module").then(mod => mod.ClientsModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
