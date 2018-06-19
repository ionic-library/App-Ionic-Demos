import { Component } from '@angular/core';
import { Events } from '../../../../../src';

@Component({
  templateUrl: 'events-page-one.html'
})
export class EventsPageOne {
  user = {
    name: 'Administrator',
    username: 'admin'
  };

  constructor(private events: Events) {}

  login() {
    this.events.publish('user:login');
  }
}
