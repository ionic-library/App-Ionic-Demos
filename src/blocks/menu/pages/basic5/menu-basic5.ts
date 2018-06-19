import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'menu-basic5.html'
})
export class MenuBasic5 {
  constructor(public navCtrl: NavController) { }

  page3() {
    this.navCtrl.push('PageFour');
  }
}
