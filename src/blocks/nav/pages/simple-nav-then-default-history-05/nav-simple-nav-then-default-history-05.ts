import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nav-then-default-history-05.html'
})
export class NavSimpleNavThenDefaultHistory05 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('FifthPage', { userId: '456', name: 'Ryan Howard'});
  }
}
