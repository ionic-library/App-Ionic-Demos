import { Component } 					from '@angular/core';
import { NavParams } 					from 'ionic-angular';

import { LoggerService }				from '../../blocks/logger/services/logger';

@Component({
	selector: 'page-details',
	templateUrl: 'details.html'
})
export class DetailsPage {

	public title: string;

	constructor(
		public navParams: NavParams,
		public loggerService: LoggerService,
	) {
		this.title = this.navParams.get('title');

		loggerService.info('DetailsPage: constructor with title=' + this.title)
	}

}
