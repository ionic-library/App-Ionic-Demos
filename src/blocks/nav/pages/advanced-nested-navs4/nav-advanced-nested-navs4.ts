import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-advanced-nested-navs4.html'
})
export class NavAdvancedNestedNavs4 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('FifthPage', { userId: '567', name: 'Pamela Beasley'});
  }
}
