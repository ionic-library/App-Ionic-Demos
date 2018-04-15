import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'ToggleTabs030101'
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Tabs 2 Tab 1 Page 1</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 2 Tab 1 Page 1
  <button ion-button (click)="nextPage()">Go to Next Page</button>
</ion-content>
  `
})
export class ToggleTabs030101 {
  constructor(public nav: NavController) {
  }

  nextPage() {
    this.nav.push('TabsTwoTabOnePageTwo', { userId: '234', name: 'Phillis Vance - Vance Refridgeration'});
  }
}
