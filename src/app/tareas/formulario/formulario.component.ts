import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../interfaces/tarea';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent   {

  tarea: string = ''
  constructor(private tareasService: TareasService){}


  agregarTarea(tarea: NgForm){

    const tareaExitosa = {
      tarea: tarea.value.tarea,
      completada: false
    }

    this.tareasService.agregarTarea(tareaExitosa);
  }

}
