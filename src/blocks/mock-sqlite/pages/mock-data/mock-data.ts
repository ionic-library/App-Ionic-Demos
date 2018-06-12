import { Component }						from '@angular/core';
import { NavController, Events } 			from 'ionic-angular';

import { LoggerService }					from '../../../logger/services/service/logger';


@Component({
	selector: 'page-mock-data',
	templateUrl: 'mock-data.html'
})
export class MockSqliteMockData {
	constructor(
		public loggerService: LoggerService
		// , private navCtrl: NavController,
		// , private eventCtrl: Events
	) {
		loggerService.info('MockSqliteMockData: constructor')
	}

	buttonClicked() {

	}
}
