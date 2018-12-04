import { Component, OnInit, Input, Output } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-simple-form',
  template: `
      <div>
        {{message}}
        <input #myInput type="text" [(ngModel)]="message"> 
        <button (click)="onClick($event, myInput.value)">Click me!</button>
        <button (click)="update.emit({text:message})">Click me!</button>
      </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();

  onClick(event, value) {
    console.log(event)
    console.log(value)
  }

  constructor() { }

  ngOnInit() {
  }

}
