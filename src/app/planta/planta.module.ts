import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasListaComponent } from './plantas-lista/plantas-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantasListaComponent],
  declarations: [PlantasListaComponent]
})
export class PlantaModule { }
