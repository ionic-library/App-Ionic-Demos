import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'NavAdvancedNavThenTabs6'
})
@Component({
  template: `
<ion-tabs>
    <ion-tab tabIcon="aperture" [root]="tabs2Tab1" tabTitle="Aperture"></ion-tab>
    <ion-tab tabIcon="apps" [root]="tabs2Tab2" tabTitle="Apps"></ion-tab>
  </ion-tabs>
  `
})
export class NavAdvancedNavThenTabs6 {

  tabs2Tab1: string = 'TabsTwoTabOnePageOne';
  tabs2Tab2: string = 'TabsTwoTabTwoPageOne';
  constructor(public nav: NavController) {
  }
}
