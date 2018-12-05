import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  styles:[`
    app-simple-form {
      background-color: orange;
      margin: 10px;
    }
  `]
})
export class AppComponent {
  title = `the jungle`;

  onUpdate(id, text){
    this.mail.update(id, text);
  }

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
    ){}
}
