import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'searchbar-nav-main-page.html'
})
export class SearchbarNavMainPage {
  constructor(public navCtrl: NavController) { }

  goToSecond() {
    this.navCtrl.push('SearchPage');
  }
}
