import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'first-page.html'
})
export class SimpleTabs0101 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Hans Gruber'});
  }
}
