import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import Message from './Message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages : Message[];
  constructor(private MessageService : MessageService, private router : Router) { }

  ngOnInit() {
    this.getMessages();
  }
  getMessages(){
    this.MessageService.getAllMessages().subscribe((messages: Message[]) => this.messages=messages);
  }
  addNew(){
    this.router.navigate(["/"]);
  }
}
