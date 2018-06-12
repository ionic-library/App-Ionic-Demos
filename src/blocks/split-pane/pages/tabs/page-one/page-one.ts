import { Component } from '@angular/core';
import { MenuController, NavController } from '../../../../../..';

@Component({
  templateUrl: 'page-one.html'
})
export class SplitPaneTabs {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
  ) { }

  push() {
    this.navCtrl.push(SplitPaneTabs);
  }
}
