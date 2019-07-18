import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Messageinterface } from '../models/messageinterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private contactCollection:AngularFirestoreCollection <Messageinterface>;
  items: Observable<Messageinterface[]>
  constructor(private db:AngularFirestore) {
    this.contactCollection = db.collection<Messageinterface>('contacts');
    this.items= this.contactCollection.valueChanges();
   }

   addMessage(message:Messageinterface){
    this.contactCollection.add(message);
   }

   getMessage(){
     return this.contactCollection;
   }


}
