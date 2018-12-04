import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    `Hello`,
    `Goodbye`,
    `Hi`
  ]

  constructor() { }
}
