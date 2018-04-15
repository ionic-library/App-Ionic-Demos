import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'ToggleTabs0201'
})
@Component({
  template: `
<ion-tabs name="first-tabs">
  <ion-tab tabIcon="heart" [root]="tabs1Tab1" tabTitle="Heart"></ion-tab>
  <ion-tab tabIcon="star" [root]="tabs1Tab2" tabTitle="Star"></ion-tab>
</ion-tabs>
  `
})
export class ToggleTabs0201 {

  tabs1Tab1: string = 'TabsOneTabOnePageOne';
  tabs1Tab2: string = 'TabsOneTabTwoPageOne';
  constructor(public nav: NavController) {
  }
}
