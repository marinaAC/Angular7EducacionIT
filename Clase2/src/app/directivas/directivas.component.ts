import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  nombres:string[]=['Alejandro','Belen','Carlos','Damian'];
  usuariosRegistrados:object[] =[
    {nombre:'Damian', correo:'damian@gmail.com', premium:true, foto:'https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-600w-535853263.jpg'},
    {nombre:'Alejandro', correo:'alejandro@gmail.com', premium:true, foto:'https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-600w-535853263.jpg'},
    {nombre:'Jorge', correo:'jorge@gmail.com', premium:false, foto:'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg'},
    {nombre:'Hector', correo:'hector@gmail.com', premium:false, foto:'https://image.shutterstock.com/image-vector/user-icon-pictogram-on-white-600w-272870117.jpg'}]

  
  constructor() { }

  ngOnInit() {
  }

  borrar(index){
    this.usuariosRegistrados.splice(index,1);
  }
 

}
