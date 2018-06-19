import { Component } from '@angular/core';
import { NavController } from '../../../../../..';

@Component({
  templateUrl: 'split-pane-nested.html'
})
export class SplitPaneNested {
  constructor(public navCtrl: NavController) { }
  push() {
    this.navCtrl.push(SplitPaneNested);
  }
}
