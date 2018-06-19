import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  selector: 'page-nav-simple-nested-navs1',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>First Page</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    First Page
    <button ion-button (click)="goToNextPage()">Go to Next Page</button>
  </ion-content>
  `
})
export class NavSimpleNestedNavs1 {

  constructor(public navCtrl: NavController) {

  }

  goToNextPage() {
    this.navCtrl.push('SecondPage', { userId: 123, name: 'Dwight K Schrute'});
  }
}
