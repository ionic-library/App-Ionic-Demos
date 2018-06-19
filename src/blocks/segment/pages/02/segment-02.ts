import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'segment-02.html'
})
export class Segment02 {
  signInType: string;
  constructor(public navCtrl: NavController) {
    this.signInType = 'new';
  }
  goToPage2() {
    this.navCtrl.push('SecondPage');
  }
}
