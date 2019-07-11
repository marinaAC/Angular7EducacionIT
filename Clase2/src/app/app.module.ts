import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    EstructuraComponent,
    DirectivasComponent,
    ComponentesComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
