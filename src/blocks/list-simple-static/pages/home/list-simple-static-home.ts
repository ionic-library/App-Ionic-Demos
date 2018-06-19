import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-list-simple-static-home',
	templateUrl: 'list-simple-static-home.html'
})
export class ListSimpleStaticHome {
	selectedItem: any;
	icons: string[];
	items: Array<{ title: string, note: string, icon: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');

		// Let's populate this page with some filler content for funzies
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];
		for (let i = 1; i < 11; i++) {
			this.items.push({
				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
	}

	itemTapped(event, item) {
		this.navCtrl.push(ListSimpleStaticHome, {
			item: item
		});
	}
}