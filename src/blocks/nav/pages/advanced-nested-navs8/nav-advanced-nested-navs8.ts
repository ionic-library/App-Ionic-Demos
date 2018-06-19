import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class NavAdvancedNestedNavs8 {

  root: string = 'FourthPage';
  constructor(public nav: NavController) {
  }
}
