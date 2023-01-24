import { Component } from '@angular/core';

//Decorador
//Recibe un objeto como parametro, el cual contiene las propiedades del componente

@Component({
    //Parametros de configuracion del componente

    //selector: nombre del componente, con este nombre lo voy a importar en el html.
    selector: 'app-mi-componente',

    //template: el html del componente.
    // template: '<h1>Hola desde Angularrr</h1>',
    //templateUrl: ruta del html template del componente.
    templateUrl: './mi-componente.component.html',

    //styleUrls: array de estilos del componente
})

export class MiComponente {
  title:string = 'Hola desde Angular, soy una variable';
}