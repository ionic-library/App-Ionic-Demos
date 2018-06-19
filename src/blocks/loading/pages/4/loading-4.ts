import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'loading-4.html'
})
export class Loading4 {
  constructor(public navCtrl: NavController) {}

  goToPage3() {
    this.navCtrl.push('PageThree');
  }
}
