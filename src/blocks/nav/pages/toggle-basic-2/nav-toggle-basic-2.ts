import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'nav-toggle-basic-2.html'
})
export class NavToggleBasic2 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('SecondPage', { userId: '123', name: 'Phyllis Vance, Vance Refridgeration'});
  }
}
