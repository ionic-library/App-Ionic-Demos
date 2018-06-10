import { Component } from '@angular/core';
import { NavController } from '../../../../../src';

@Component({
  templateUrl: 'page-three.html'
})
export class ConfigPageThree {
  constructor(public navCtrl: NavController) {}

  pop() {
    this.navCtrl.pop();
  }
}
