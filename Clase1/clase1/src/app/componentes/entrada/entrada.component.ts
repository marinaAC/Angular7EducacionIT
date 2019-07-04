import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  contar:number = 20;
  constructor() { }

  ngOnInit() {
  }

  funcionRestar(){
    this.contar=this.contar-1;
  }
}
