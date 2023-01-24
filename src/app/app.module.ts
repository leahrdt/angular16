import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MiComponente } from './mi-componente/mi-componente.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReactivoComponent } from './Formularios/reactivo/reactivo.component';
import { DrivenComponent } from './Formularios/driven/driven.component';
import { FormDrivenComponent } from './validados/form-driven/form-driven.component';
import { ListadoPeliculaComponent } from './Peliculas/listado-pelicula/listado-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    ListadoComponent,
    DetalleComponent,
    ReactivoComponent,
    DrivenComponent,
    FormDrivenComponent,
    ListadoPeliculaComponent
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  //bootstrap: componente principal de la aplicacion, el que se va a lanzar.
  bootstrap: [AppComponent]
})
export class AppModule { }
