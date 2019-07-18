import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { DatabaseService } from './services/database.service';
import { ListaComponent } from './components/lista/lista.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [ DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
