import { Component } from '@angular/core';
import { NavController } from '../../../../../src';
import { PageTwo }from '../page-two/page-two';

@Component({
  templateUrl: 'navigation-page1.html'
})
export class NavigationPage1 {
  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(PageTwo);
  }
}
