import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  encapsulation: ViewEncapsulation.Native, 
  // ignores any global styles that mnight be defined. 
  //replacing 'Native' with 'Emulated' allows global styles in, 
  //but no styles go out.
  selector: 'app-simple-form',
  template: `
        {{message}}
        <input 
          #myInput 
          type="text" 
          [(ngModel)]="message"
          [ngClass]="{mousedown: isMousedown}"
          (mousedown)="isMousedown = true"
          (mouseup)="isMousedown = false"
          (mouseleave)="isMousedown = false"
          > 
        <button (click)="onClick($event, myInput.value)">Click me!</button>
        <button (click)="update.emit({text:message})">Update me!</button>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mousedown{
    border: 2px solid green;
  }

  *{
    font-family: monospace;
    font-size: 3em;
  }

  input{
    width: 50%;
  }

  input:focus{
    font-weight: bold;
    outline: none;
  }

  button{
    border: none;
    width: 50%;
    margin: 5px;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;
  @Output()  update = new EventEmitter()

  onClick(event, value) {
    console.log(event)
    console.log(value)
  }

  constructor() { }

  ngOnInit() {
  }

}
