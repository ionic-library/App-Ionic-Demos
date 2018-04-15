import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../..';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class AdvancedNavThenTabs01 {

  root: string = 'NestedNavOnePageTwo';
  constructor(public nav: NavController) {
  }
}
