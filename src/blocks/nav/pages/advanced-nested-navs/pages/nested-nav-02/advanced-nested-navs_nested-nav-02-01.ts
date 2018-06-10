import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class AdvancedNestedNavs02nestednav02 {

  root: string = 'NestedNavTwoPageTwo';
  constructor(public nav: NavController) {
  }
}
