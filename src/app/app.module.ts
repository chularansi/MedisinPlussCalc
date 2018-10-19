import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Norrisk2Component } from './norrisk2/norrisk2.component';
import { Chads2vascComponent } from './chads2vasc/chads2vasc.component';

@NgModule({
  declarations: [
    AppComponent,
    Norrisk2Component,
    Chads2vascComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
