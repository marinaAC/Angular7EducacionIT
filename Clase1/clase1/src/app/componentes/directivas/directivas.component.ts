import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  nombre:string ='Cristian';
  apellido = 'Racedo';
  presente:boolean = true;
  observaciones:any ='Clase de angular 2'

  // constructor() {
      
  //  }

  ngOnInit() {
  }

}
