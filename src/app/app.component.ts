import { Component } from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  get sorted():Card[]{
    console.log('accsecc');
    return this.cards.sort((a,b) => b.votes - a.votes);
  }

  onclick(firstName: HTMLInputElement,lastName: HTMLInputElement) {
    const card = new Card(firstName.value,lastName.value,0);
    this.cards.push(card);
    console.log(this.cards);

    firstName.value = '';
    lastName.value = '';
  }
}