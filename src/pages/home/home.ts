import { Component }						from '@angular/core';
import { NavController, Events } 			from 'ionic-angular';

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
