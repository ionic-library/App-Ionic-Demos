import { Component } from '@angular/core';
import { NavController } from '../../../../../src';

let pageNum = 2;

@Component({
  templateUrl: 'navigation-page-two.html'
})
export class NavigationPageTwo {
  pageNum = pageNum;

  constructor(public navCtrl: NavController) {}

  push() {
    pageNum++;
    this.navCtrl.push(NavigationPageTwo);
  }

  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }
}
