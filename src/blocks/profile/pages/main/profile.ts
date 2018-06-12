import { Component }					from '@angular/core';

import { IonicPage }					from 'ionic-angular';
import { NavController }				from 'ionic-angular';
import { MenuController }				from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfileMain {
	rootPage: any;
	items: Array<{ title: string, page: any }>;

	constructor(public navCtrl: NavController, public menu: MenuController) {
		this.rootPage = 'ProfileMain';
		this.menu.enable(true, 'menu-profile');
		this.items = [
			{
				title: 'Type One',
				page: 'ProfileOnePage'
			},
			// {
			//   title: 'Type Two',
			//   page: ProfileTwoPage
			// },
			{
				title: 'Type Three',
				page: 'ProfileThreePage'
			},
			{
				title: 'Type Four',
				page: 'ProfileFourPage'
			},
			{
				title: 'Type Five',
				page: 'ProfileFivePage'
			},
			{
				title: 'Profile Settings',
				page: 'ProfileSettingsPage'
			},
		];
	}

	itemTapped(event, item) {
		this.navCtrl.push(item.page);
	}
}
