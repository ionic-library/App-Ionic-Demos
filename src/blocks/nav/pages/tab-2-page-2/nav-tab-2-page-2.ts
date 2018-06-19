import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'NavTab2Page2/userId/:userId/name/:name', defaultHistory: ['TabsTwoTabTwoPageOne']} */)
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 2 Tab 2 Page 2</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 2 Tab 2 Page 2
  <div>
  User ID: {{userId}}
  </div>
  <div>
  Name: {{name}}
  </div>
  <button ion-button (click)="next()">Next</button>
</ion-content>
  `
})
export class NavTab2Page2 {
  userId: string;
  name: string;
  constructor(public nav: NavController, navParams: NavParams) {
    this.userId = navParams.data.userId;
    this.name = navParams.data.name;
  }

  next() {
    this.nav.push('TabsTwoTabTwoPageThree', { paramOne: 'Albany', paramTwo: 'NY'});
  }
}