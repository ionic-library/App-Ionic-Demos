import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'NavAdvancedNavThenTabs5Home'
})
@Component({
  template: `
<ion-tabs>
  <ion-tab tabIcon="heart" [root]="tabs1Tab1" tabTitle="Heart"></ion-tab>
  <ion-tab tabIcon="star" [root]="tabs1Tab2" tabTitle="Star"></ion-tab>
</ion-tabs>
  `
})
export class NavAdvancedNavThenTabs5Home {

  tabs1Tab1: string = 'TabsOneTabOnePageOne';
  tabs1Tab2: string = 'TabsOneTabTwoPageOne';
  constructor(public nav: NavController) {
  }
}
