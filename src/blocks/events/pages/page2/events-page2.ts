import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Events } from 'ionic-angular';

@IonicPage()
@Component({
	templateUrl: 'events-page2.html'
})
export class EventsPage2 {
	constructor(private events: Events) { }

	logout() {
		this.events.publish('user:logout');
	}
}
