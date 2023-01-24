import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Pelicula } from '../interface/pelicula';
import { PELICULAS } from '../mock-peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }

  getPeliculas(): Observable<Pelicula[]> {
    return new Observable((observer: Observer<Pelicula[]>) => {
      observer.next(PELICULAS);
      observer.complete();
    });
  }
}
