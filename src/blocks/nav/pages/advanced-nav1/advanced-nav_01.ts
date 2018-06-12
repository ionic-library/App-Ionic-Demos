import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'first-page.html'
})
export class NavAdvancedNav1 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('SecondPage', { userId: '123', name: 'Michael Scott'});
  }
}
