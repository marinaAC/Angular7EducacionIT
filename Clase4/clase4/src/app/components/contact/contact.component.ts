import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:FormGroup;
  private name:FormControl;
  private email:FormControl;
  private message:FormControl;

  constructor(private db:DatabaseService) {
    
   }

  ngOnInit() {
    this.name = new FormControl();
    this.email = new FormControl();
    this.message = new FormControl();
    this.contact = new FormGroup({
      name:this.name,
      email:this.email,
      message:this.message
    })
  }

  // createContact(){
  //   return new FormGroup ({
  //     name: new FormControl(),
  //     email: new FormControl (),
  //     message: new FormControl (),
  //   })
  // }

  saveForm(){
    console.log("Estoy mandando esto " +this.contact.value)
    this.db.addMessage(this.contact.value);
  }

  resetForm(){
    this.contact.reset();
  }



}
