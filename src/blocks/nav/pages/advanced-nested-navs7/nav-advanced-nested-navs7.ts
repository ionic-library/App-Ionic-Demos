import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class NavAdvancedNestedNavs7 {

  root: string = 'FirstPage';
  constructor(public nav: NavController) {
  }
}
