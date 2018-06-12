import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'main-page.html'
})
export class SearchbarNav {
  constructor(public navCtrl: NavController) { }

  goToSecond() {
    this.navCtrl.push('SearchPage');
  }
}
