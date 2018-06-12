import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'page-three.html'
})
export class MenuBasic {
  constructor(public navCtrl: NavController) { }

  page3() {
    this.navCtrl.push('PageFour');
  }
}
