import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule, NgForOf } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, CommonModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
