import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TareasService } from './tareas/services/tareas.service';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TareasModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
