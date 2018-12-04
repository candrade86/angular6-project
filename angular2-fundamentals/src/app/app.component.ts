import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `the jungle`;

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
    ){}
}
