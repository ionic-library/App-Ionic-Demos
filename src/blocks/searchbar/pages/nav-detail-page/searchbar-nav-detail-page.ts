import { Component } from '@angular/core';
import { IonicPage, NavParams } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'searchbar-nav-detail-page.html'
})
export class SearchbarNavDetailPage {
  city: string;

  constructor(_navParams: NavParams) {
    this.city = _navParams.get('city');
  }
}
