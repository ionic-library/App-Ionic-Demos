import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'first-page.html'
})
export class SimpleNavThenDefaultHistory0201 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Phyllis Vance, Vance Refridgeration'});
  }
}
