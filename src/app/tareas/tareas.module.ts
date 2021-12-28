import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GridComponent } from './grid/grid.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubtituloComponent,
    ListadoTareasComponent,
    GridComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubtituloComponent,
    ListadoTareasComponent,
    GridComponent,
    FormularioComponent
  ]
})
export class TareasModule { }
