import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Events } from 'ionic-angular';

@IonicPage()
@Component({
	templateUrl: 'events_2.html'
})
export class Events2Page {
	constructor(private events: Events) { }

	logout() {
		this.events.publish('user:logout');
	}
}
