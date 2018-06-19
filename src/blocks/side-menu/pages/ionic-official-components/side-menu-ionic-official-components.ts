import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-ionic-official-components',
	templateUrl: 'side-menu-ionic-official-components.html'
})
export class SideMenuIonicOfficialComponents {
	rootPage: any;
	items: Array<{ title: string, page: any }>;

	constructor(public navCtrl: NavController) {
		this.rootPage = 'CardListPage';

		this.items = [
			{
				title: 'Buttons',
				page: 'ButtonsListPage'
			},
			{
				title: 'Alerts',
				page: 'AlertsPage'
			},
			{
				title: 'Cards',
				page: 'CardsListPage'
			},
		];
	}

	itemTapped(event, item) {
		this.navCtrl.push(item.page);
	}
}
