import { HttpClient } 					from '@angular/common/http';
import { Injectable } 					from '@angular/core';

@Injectable()
export class MainDataProvider {

	constructor(public http: HttpClient) {
		console.log('MainDataProvider Provider');
	}

}
