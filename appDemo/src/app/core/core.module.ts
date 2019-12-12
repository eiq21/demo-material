import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [MenuComponent]
})
export class CoreModule { }
