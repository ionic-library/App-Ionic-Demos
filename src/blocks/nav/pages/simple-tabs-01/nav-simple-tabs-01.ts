import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-tabs-01.html'
})
export class NavSimpleTabs01 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Hans Gruber'});
  }
}
