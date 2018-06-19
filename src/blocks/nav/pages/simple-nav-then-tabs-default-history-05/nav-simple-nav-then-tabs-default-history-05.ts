import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nav-then-tabs-default-history-05.html'
})
export class NavSimpleNavThenTabsDefaultHistory05 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Phyllis Vance, Vance Refridgeration'});
  }
}
