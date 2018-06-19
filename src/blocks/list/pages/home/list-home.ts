import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-home',
  templateUrl: 'list-home.html'
})
export class ListHome {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ListsPage';
    this.items = [
      {
        title: 'Settings',
        page : 'SettingsListPage'
      },
      {
        title: 'Sliding Item',
        page : 'SlidingItemPage'
      },
      {
        title: 'Delete Items',
        page: 'DeleteItemsPage'
      },
      {
        title: 'Users Listing',
        page: 'UsersPage'
      },
      {
        title: 'Crypto Currencies',
        page: 'CryptoListPage'
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
