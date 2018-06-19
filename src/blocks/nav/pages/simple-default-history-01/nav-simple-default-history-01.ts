import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'nav-simple-default-history-01.html'
})
export class NavSimpleDefaultHistory01 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Hans Gruber'});
  }
}
