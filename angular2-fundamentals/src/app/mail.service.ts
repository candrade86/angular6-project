import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    {id:0, text:`Hello`},
    {id:1, text:`Goodbye`},
    {id:2, text:`Hi`}
  ]

  update(id, text){
    this.messages = this.messages.map(m =>
        m.id === id
          ? {id, text}
          : m
      )
  }

  constructor() { }
}
