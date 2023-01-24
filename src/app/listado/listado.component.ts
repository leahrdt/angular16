import { Component,OnInit,OnDestroy } from '@angular/core';
import { Estudiante } from './../interface/estudiante';

const ESTUDIANTES: Array<Estudiante> = [
  { nombre: 'Juan', legajo: 1, materia: 'Matematica', regular: true },
  { nombre: 'Pedro', legajo: 2, materia: 'Fisica', regular: true },
  { nombre: 'Maria', legajo: 3, materia: 'Quimica', regular: false },
  { nombre: 'Jose', legajo: 4, materia: 'Historia', regular: true },
  { nombre: 'Ana', legajo: 5, materia: 'Geografia', regular: false },
  { nombre: 'Luis', legajo: 6, materia: 'Biologia', regular: true },
  { nombre: 'Lucia', legajo: 7, materia: 'Arte', regular: false },
  { nombre: 'Miguel', legajo: 8, materia: 'Economia', regular: true },
  { nombre: 'Marta', legajo: 9, materia: 'Ingles', regular: false },
  { nombre: 'Jorge', legajo: 10, materia: 'Programacion', regular: true }
];



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit, OnDestroy {

  estudianteSeleccionado!: Estudiante;
  estudiantes: Estudiante[] = ESTUDIANTES;

  constructor() { }

  ngOnInit(): void {
    console.log("Hola desde el lnistado",ESTUDIANTES);
  }

  ngOnDestroy(): void {
    console.log("El componente se va a eliminar");
  }

  verDetalleEstudiante(estudiante: Estudiante): void {
    this.estudianteSeleccionado = estudiante;
  }

}
