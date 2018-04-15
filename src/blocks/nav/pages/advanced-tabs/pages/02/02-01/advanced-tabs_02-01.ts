import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'AdvancedTabs020201'
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 2 Tab 2 Page 1</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 2 Tab 2 Page 1
  <button ion-button (click)="nextPage()">Go to Next Page</button>
</ion-content>
  `
})
export class AdvancedTabs020201 {
  constructor(public nav: NavController) {
  }

  nextPage() {
    this.nav.push('TabsTwoTabTwoPageTwo', { userId: '456', name: 'Michael Scarn'});
  }
}
