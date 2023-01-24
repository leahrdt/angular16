import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})

export class ReactivoComponent implements OnInit {
  titulo: string = 'Formulario Reactivo';

  //Creo una instancia de FormBuilder llamada fn
  //Lo mismo que esto, private fn = new FormBuilder();
  constructor(private fn: FormBuilder) { }

  ngOnInit(): void {
  }

  // formControlName tiene que tener el mismo nombre que...
  // ...en el componente.ts ej: 001 y 002 del HTML
  formAngular = this.fn.group({
    nombre: [''],
    apellido: ['']
  });
  // Es lo mismo que..
  // formAngular = new FormGroup({..

  onSubmit() {
    console.log('enviado',this.formAngular.value);   
  }

  actualizate(){
    this.formAngular.patchValue({
      nombre: 'Juan',
      apellido: 'Perez'
    });
  }
  
}

