import { NgIf, NgForOf } from '@angular/common';
import { componentFactoryName } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  @ViewChild('guess') guess: ElementRef;

  random: number= Math.floor(Math.random()*100);
  numberOfGuesses: number = 10;
  guidelines: string [] = new Array(9);
  guidingText: string;

  waagEenGokje(value) {
    if (this.numberOfGuesses <= 0){
      window.alert('Je hebt het nummer niet gevonden binnen het maximum aantal keer raden. Probeer het opnieuw');
    }
    else{
      if (isNaN(value) || value > 100 || value < 0 || value == ""){
        window.alert('Gelieve een getal in te vullen tussen 1 en honderd.')
      }
      else {
        this.helpEenHandje(value);
      }
    }
    this.guess.nativeElement.value = null;
  }


  helpEenHandje(value){
  if (this.random == value){
    window.alert('Hoera, je hebt het juiste nummer!!!');
  }
  if(this.random < value){
    this.guidingText = "Het getal dat je zoekt is kleiner dan dit getal.";
  }
  if(this.random > value){
    this.guidingText = "Het getal dat je zoekt is groter dan dit getal.";
  }
  this.numberOfGuesses = this.numberOfGuesses - 1;
  this.guidelines[this.numberOfGuesses] = value + " => " + this.guidingText;
  }

}

