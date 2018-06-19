import { Injectable }					from '@angular/core';
import { HttpClient } 					from '@angular/common/http';

import 'rxjs/add/operator/map';

// search-pipe-data.json

@Injectable()
export class SearchPipeProvider {

	data: any;

	constructor(public http: HttpClient) {
		console.log('SearchPipeProvider');

		this.data = null;
	}

	load() {
		if (this.data) {
			return Promise.resolve(this.data);
		}

		return []

		/* @TODO:
		return new Promise(resolve => {
			this.http.get('assets/data/search-pipe-data.json')
				.map(res => res.json())
				.subscribe(data => {
					this.data = data;
					resolve(this.data);
				});
		});
		*/
	}
}
