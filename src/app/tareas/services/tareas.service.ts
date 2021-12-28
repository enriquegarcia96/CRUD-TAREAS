import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';


@Injectable()
export class TareasService {
  tareas: Array<Tarea> = [];

  deleteTarea(nombreTarea: string){
    const tareas = this.obtenerTareas();

    tareas.forEach((tarea, index) => {
      if(tarea.tarea === nombreTarea){
        tareas.splice(index, 1)
      }
    })
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  obtenerTareas(){

    if (localStorage.getItem('tareas') === null) {
      this.tareas = [];
    } else {
      this.tareas = JSON.parse(localStorage.getItem('tareas')!)
    }
    return this.tareas;
  }


  completeTarea(nombreTarea: string){
    const tareas = this.obtenerTareas();

    tareas.find((tarea) =>{
      if (tarea.tarea === nombreTarea) {
        tarea.completada = true
      }
    })
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  agregarTarea(tarea: Tarea){
    this.tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

}
