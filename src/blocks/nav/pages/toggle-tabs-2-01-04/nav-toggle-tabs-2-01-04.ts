import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'NavToggleTabs20104'
})
@Component({
  template: `
<ion-tabs name="first-tabs">
  <ion-tab tabIcon="heart" [root]="tabs1Tab1" tabTitle="Heart"></ion-tab>
  <ion-tab tabIcon="star" [root]="tabs1Tab2" tabTitle="Star"></ion-tab>
</ion-tabs>
  `
})
export class NavToggleTabs20104 {

  tabs1Tab1: string = 'TabsOneTabOnePageOne';
  tabs1Tab2: string = 'TabsOneTabTwoPageOne';
  constructor(public nav: NavController) {
  }
}
