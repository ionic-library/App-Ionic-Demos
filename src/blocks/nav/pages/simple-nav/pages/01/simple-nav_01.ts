import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'first-page.html'
})
export class SimpleNav01 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('SecondPage', { userId: '123', name: 'ted'});
  }
}
