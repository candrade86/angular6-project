import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:'mail', useClass:MailService},
    {provide:'api', useValue: 'http://localhost:3000/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
