import { Component } from '@angular/core';
import { IonicPage, ViewController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'searchbar-nav-modal-page.html'
})
export class SearchbarNavModalPage {
 constructor(public viewCtrl: ViewController) {}
  close() {
    this.viewCtrl.dismiss();
  }
}
