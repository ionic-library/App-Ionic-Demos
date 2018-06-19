import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-nested-peer-navs-02-01.html'
})
export class NavSimpleNestedPeerNavs0201 {
  constructor(public nav: NavController) {
  }

  goToPageTwo() {
    this.nav.push('SecondPage', { userId: '123', name: 'Michael Scott'});
  }
}
