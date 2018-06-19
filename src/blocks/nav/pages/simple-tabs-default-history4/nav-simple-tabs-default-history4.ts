import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
})
@Component({
  templateUrl: 'nav-simple-tabs-default-history4.html'
})
export class NavSimpleTabsDefaultHistory4 {

  constructor(public nav: NavController, public params: NavParams) {
  }

  goToNextPage() {
    this.nav.push('FifthPage', { userId: '456', name: 'Stanley Hudson'});
  }
}
