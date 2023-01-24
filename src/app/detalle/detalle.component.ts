import { Component,Input,OnInit } from '@angular/core';
import { Estudiante } from './../interface/index';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  titulo: string = 'Modificar Estudiante';

  @Input()
  estudiante!: Estudiante;

  constructor() { }

  ngOnInit(): void {
    console.log("Hola desde el detalle",this.estudiante);
  }
  mostrarEstudiante(): void{
    console.log(this.estudiante);
  }
  altoClick(): void{
    console.log("Click en el boton",this.estudiante);
  }

}
