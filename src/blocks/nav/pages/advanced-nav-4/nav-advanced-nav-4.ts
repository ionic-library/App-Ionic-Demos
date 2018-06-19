import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-advanced-nav-4.html'
})
export class NavAdvancedNav4 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('FifthPage', { userId: '567', name: 'Pamela Beasley'});
  }
}
