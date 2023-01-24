import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interface/pelicula'
import { OpcionesPelicula } from '../../interfaces/opciones-pelis';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit{
  titulo: string = 'Formulario driven Pelicula';
  generos: Array<OpcionesPelicula> = [{tipo:'Humor', valor:1},
                       {tipo:'Drama', valor:2},
                       {tipo:'Accion', valor:3},
                       {tipo:'Terror', valor:4}];
  pelicula!: Pelicula;

  constructor() {

   }

  ngOnInit(): void {
    this.pelicula = {id: 3, titulo: 'perez', director:'mack ', genero:2}
  }
  enviarFormulario() {
    console.log('enviado',this.pelicula);   
  }
  actualizate() {
    console.log('enviado',this.pelicula);   
  }
}
