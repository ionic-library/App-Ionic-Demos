import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'page-two.html'
})
export class LoadingBasic {
  constructor(public navCtrl: NavController) {}

  goToPage3() {
    this.navCtrl.push('PageThree');
  }
}
