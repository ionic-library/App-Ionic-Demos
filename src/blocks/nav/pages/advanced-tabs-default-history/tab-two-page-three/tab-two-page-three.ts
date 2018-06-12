import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
  segment: 'NavAdvancedTabsDefaultHistory/paramOne/:paramOne/paramTwo/:paramTwo',
  defaultHistory: ['TabsOneTabTwoPageOne']
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 1 Tab 2 Page 3</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 1 Tab 2 Page 3
  <div>
  Param One: {{paramOne}}
  </div>
  <div>
  Param Two: {{paramTwo}}
  </div>
</ion-content>
  `
})
export class NavAdvancedTabsDefaultHistory {
  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, navParams: NavParams) {
    this.paramOne = navParams.data.paramOne;
    this.paramTwo = navParams.data.paramTwo;
  }
}
