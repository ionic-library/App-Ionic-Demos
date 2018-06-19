import { Component } from '@angular/core';
import { NavController } from '../../../../../src';

let pageNum = 2;

@Component({
  templateUrl: 'navigation-page2.html'
})
export class NavigationPage2 {
  pageNum = pageNum;

  constructor(public navCtrl: NavController) {}

  push() {
    pageNum++;
    this.navCtrl.push(NavigationPage2);
  }

  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }
}
