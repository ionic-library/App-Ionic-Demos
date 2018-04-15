import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'ToggleTabs0302'
})
@Component({
  template: `
<ion-tabs name="second-tabs">
  <ion-tab tabIcon="aperture" [root]="tabs2Tab1" tabTitle="Aperture"></ion-tab>
  <ion-tab tabIcon="apps" [root]="tabs2Tab2" tabTitle="Apps"></ion-tab>
</ion-tabs>
  `
})
export class ToggleTabs0302 {

  tabs2Tab1: string = 'TabsTwoTabOnePageOne';
  tabs2Tab2: string = 'TabsTwoTabTwoPageOne';
  constructor(public nav: NavController) {
  }
}
