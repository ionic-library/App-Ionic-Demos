import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nav-1.html'
})
export class NavSimpleNav1 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('SecondPage', { userId: '123', name: 'ted'});
  }
}
