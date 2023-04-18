import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent
  ],
  imports: [
    //import ReactiveFormsModule to allow angular to recognise that this webpage is a form
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
