import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'fourth-page.html'
})
export class SimpleNavThenDefaultHistory0304 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('FifthPage', { userId: '456', name: 'Ryan Howard'});
  }
}
