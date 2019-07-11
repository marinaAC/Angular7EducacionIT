import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {
  cambiar:boolean=true;
  cambiar2:boolean=true;
  logogmail:string='../../assets/img/logo-gmail.png'

  constructor() { }

  ngOnInit() {
  }

}
