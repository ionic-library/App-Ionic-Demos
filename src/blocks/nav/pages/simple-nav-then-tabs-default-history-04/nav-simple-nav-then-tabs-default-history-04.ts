import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nav-then-tabs-default-history-04.html'
})
export class NavSimpleNavThenTabsDefaultHistory04 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('FifthPage', { userId: '456', name: 'Ryan Howard'});
  }
}
