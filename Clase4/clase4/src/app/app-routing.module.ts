import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from'@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ListaComponent } from './components/lista/lista.component';

const routes:Routes=[
  {path: 'contacto', component:ContactComponent},
  {path:'lista',component:ListaComponent},
  {path:"**",component:ContactComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
