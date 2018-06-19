import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-ionic-components-button-page',
	templateUrl: 'ionic-components-button-page.html'
})
export class IonicComponentsButtonPage {
	rootPage: any;
	items: Array<{ title: string, page: any }>;

	constructor(public navCtrl: NavController) {
		this.rootPage = 'IonicComponentsButtonPage';
		this.items = [
			{
				title: 'Button Styles',
				page: 'ButtonStylesPage'
			},
			{
				title: 'Icon Buttons',
				page: 'IconButtonsPage'
			},
			{
				title: 'Buttons in Components',
				page: 'ButtonComponentsPage'
			},
		];
	}

	itemTapped(event, item) {
		this.navCtrl.push(item.page);
	}
}
