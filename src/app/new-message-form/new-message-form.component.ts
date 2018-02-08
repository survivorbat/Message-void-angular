import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.css']
})
export class NewMessageFormComponent implements OnInit {
  private message:string;
  private errorinput:string;
  constructor(private MessageService: MessageService, private router: Router) { 
    this.message="";
  }

  ngOnInit() {
  }

  submit() {
    if(this.message.length<=4 || this.message.length>500){
      this.errorinput="Please make the length of your message between 4 and 500 characters.";
      return;
    }
    this.MessageService.postMessage(this.message)
      .subscribe(result => {
        this.router.navigate(["/messages"]);
      });
  }
}
