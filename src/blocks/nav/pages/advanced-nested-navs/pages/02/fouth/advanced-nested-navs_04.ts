import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'fourth-page.html'
})
export class AdvancedNestedNavs02fouth {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('FifthPage', { userId: '567', name: 'Pamela Beasley'});
  }
}
