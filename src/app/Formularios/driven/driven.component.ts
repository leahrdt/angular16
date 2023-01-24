import { Component, OnInit } from '@angular/core';
import { EstudianteForm } from './../../interface/estudiante-form';

//EstudianteForm es igual a:
// export interface EstudianteForm {
// 	nombre: string;
//     apellido: string;¿
// }

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})

export class DrivenComponent  implements OnInit {

  titulo: string = 'Formulario driven';
  estudiante!: EstudianteForm;
  constructor(
    ) {

    this.estudiante = {nombre: 'carla', apellido: 'perez'}
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('enviado',this.estudiante);   
  }
  actualizate() {
    console.log('enviado',this.estudiante);   
  }
}
