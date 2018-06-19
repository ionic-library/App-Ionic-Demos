import { Component }						from '@angular/core';
import { NavController, Events } 			from 'ionic-angular';

import { LoggerService }					from '../../../logger/services/service/logger';


@Component({
	selector: 'page-mock-sqlite-mock-data',
	templateUrl: 'mock-sqlite-mock-data.html'
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
