import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'NavToggleTabs'
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Tabs 1 Tab 2 Page 1</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 1 Tab 2 Page 1
  <button ion-button (click)="nextPage()">Go to Next Page</button>
</ion-content>
  `
})
export class NavToggleTabs {
  constructor(public nav: NavController) {
  }

  nextPage() {
    this.nav.push('TabsOneTabTwoPageTwo', { userId: '456', name: 'Stanley Hudson'});
  }
}
