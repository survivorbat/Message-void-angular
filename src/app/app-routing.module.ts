import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'new', component: NewMessageFormComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: '/new', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}