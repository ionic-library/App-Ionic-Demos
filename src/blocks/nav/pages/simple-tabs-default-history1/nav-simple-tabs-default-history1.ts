import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-tabs-default-history1.html'
})
export class NavSimpleTabsDefaultHistory1 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Hans Gruber'});
  }
}
