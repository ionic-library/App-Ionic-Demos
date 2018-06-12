import { Component } from '@angular/core';
import { NavController } from '../../../../../..';

@Component({
  templateUrl: 'page-three.html'
})
export class SplitPaneNested {
  constructor(
    public navCtrl: NavController,
  ) { }

  push() {
    this.navCtrl.push(SplitPaneNested);
  }
}
