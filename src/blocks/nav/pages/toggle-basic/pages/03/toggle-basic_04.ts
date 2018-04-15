import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'fourth-page.html'
})
export class ToggleBasic03 {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push('FifthPage', { userId: '456', name: 'Ryan Howard'});
  }
}
