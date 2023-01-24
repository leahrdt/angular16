import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interface/pelicula'
import { PeliculaService } from 'src/app/Servicios/pelicula.service';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  titulo: string = 'Listado de peliculas';
  peliculas: Pelicula[] = [];
  constructor(private svcPelicula:PeliculaService) { }

  ngOnInit(): void {
    this.getPeliculas()
  }

  getPeliculas() {
    this.svcPelicula.getPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
        console.log(peliculas);
      }
    );
  }

}
