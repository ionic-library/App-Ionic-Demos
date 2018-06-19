import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Events } from 'ionic-angular';

@IonicPage()
@Component({
	templateUrl: 'events-page1.html'
})
export class EventsPage1 {
	user = {
		name: 'Administrator',
		username: 'admin'
	};

	constructor(private events: Events) { }

	login() {
		this.events.publish('user:login');
	}
}
