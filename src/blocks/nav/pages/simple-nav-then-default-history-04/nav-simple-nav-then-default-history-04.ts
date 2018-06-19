import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nav-then-default-history-04.html'
})
export class NavSimpleNavThenDefaultHistory04 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Phyllis Vance, Vance Refridgeration'});
  }
}
