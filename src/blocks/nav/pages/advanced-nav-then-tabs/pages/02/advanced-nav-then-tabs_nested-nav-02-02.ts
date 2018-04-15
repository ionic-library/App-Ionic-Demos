import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class AdvancedNavThenTabs02 {

  root: string = 'NonTabTwo';
  constructor(public nav: NavController) {
  }
}
