import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class AdvancedNestedNavs01nestednav01 {

  root: string = 'FirstPage';
  constructor(public nav: NavController) {
  }
}
