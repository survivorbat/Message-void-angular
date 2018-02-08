import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private url: string = "http://mv.mheijden.nl/api/messages";
  constructor(private http: HttpClient) { }

  getAllMessages(){
    return this.http.get(this.url);
  }
  postMessage(message: string) {
    return this.http.post(this.url,{text: message});
  }
}
