import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class NavAdvancedNestedNavs {

  root: string = 'NestedNavOnePageTwo';
  constructor(public nav: NavController) {
  }
}
