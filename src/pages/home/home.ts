import { Component }						from '@angular/core';
import { NavController, Events } 			from 'ionic-angular';

import { DetailsPage }						from '../details/details';
import { DataPageHome }						from '../../blocks/sqlite/pages/data-home/data-home';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(
		private navCtrl: NavController,
		private eventCtrl: Events
	) {
		console.log('HomePage::constructor')
	}
}
