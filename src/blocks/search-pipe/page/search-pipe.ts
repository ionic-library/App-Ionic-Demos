import { Component } 					from '@angular/core';
import { IonicPage } 					from 'ionic-angular';
import { NavController, NavParams } 	from 'ionic-angular';

import { LoggerService }				from '../../logger/services/logger';

import { SearchPipe }					from './../pipe/search';
import { SearchPipeBackendProvider }	from '../provider/search-pipe-backend';

@IonicPage()
@Component({
	selector: 'page-search-pipe',
	templateUrl: 'search-pipe.html',
})
export class SearchPipePage {

	list: any;
	term: string = '';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public backendProvider: SearchPipeBackendProvider,
		public loggerService: LoggerService,
	) {
		loggerService.info('SearchPipePage: constructor')
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPipePage');

		this.list = this.backendProvider.load()

		var firstElement = this.list[0]
		console.log(firstElement);
		console.log(firstElement.fullname);
	}

	// this is run whenever the (ionInput) event is fired
	searchFn(ev: any) {
		this.term = ev.target.value;
	}

}
