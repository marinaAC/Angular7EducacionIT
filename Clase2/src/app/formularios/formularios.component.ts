import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'; 

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  registroForm = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.registroForm);
  }

}
