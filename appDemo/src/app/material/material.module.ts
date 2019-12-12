import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material"
import { FlexLayoutModule } from "@angular/flex-layout"

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [FlexLayoutModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule { }
