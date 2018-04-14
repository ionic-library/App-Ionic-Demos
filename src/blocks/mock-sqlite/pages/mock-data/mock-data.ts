import { Component }						from '@angular/core';
import { NavController, Events } 			from 'ionic-angular';

import { LoggerService }					from '../../../logger/services/logger';


@Component({
	selector: 'page-mock-data',
	templateUrl: 'mock-data.html'
})
export class MockDataPage {
	constructor(
		public loggerService: LoggerService
		// , private navCtrl: NavController,
		// , private eventCtrl: Events
	) {
		loggerService.info('MockDataPage: constructor')
	}

	buttonClicked() {

	}
}
