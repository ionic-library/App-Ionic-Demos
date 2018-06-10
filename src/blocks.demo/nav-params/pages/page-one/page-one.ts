import { Component } from '@angular/core';
import { NavController } from '../../../../../src';
import { ConfigTabsPageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'page-one.html'
})
export class NavParamsPageOne {
  myParam: string = '';

  constructor(public navCtrl: NavController) {}

  pushParams() {
    this.navCtrl.push(ConfigTabsPageTwo, { 'myParam': this.myParam });
  }
}
