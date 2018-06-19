import { Component } from '@angular/core';
import { NavController } from '../../../../../src';
import { ConfigTabsPageTwo }from '../page-two/page-two';

@Component({
  templateUrl: 'navigation-page-one.html'
})
export class NavigationPageOne {
  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(ConfigTabsPageTwo);
  }
}
