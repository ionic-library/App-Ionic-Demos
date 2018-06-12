import { Component } from '@angular/core';
import { NavController } from '../../../../../..';

@Component({
  templateUrl: 'side-page.html'
})
export class SplitPaneTabs {
  constructor(public navCtrl: NavController) { }
  push() {
    this.navCtrl.push(SplitPaneTabs);
  }
}
