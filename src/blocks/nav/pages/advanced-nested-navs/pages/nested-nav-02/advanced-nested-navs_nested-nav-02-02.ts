import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class NavAdvancedNestedNavs {

  root: string = 'FourthPage';
  constructor(public nav: NavController) {
  }
}
