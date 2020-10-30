import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
