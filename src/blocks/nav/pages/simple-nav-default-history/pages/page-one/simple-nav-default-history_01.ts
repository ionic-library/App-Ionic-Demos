import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'first-page.html'
})
export class NavSimpleNavDefaultHistory {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('SecondPage', { userId: '123', name: 'ted'});
  }
}
