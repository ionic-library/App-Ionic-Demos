import { Component } from '@angular/core';
import { Events } from '../../../../../src';

@Component({
  templateUrl: 'events-page-two.html'
})
export class EventsPageTwo {
  constructor(private events: Events) {}

  logout() {
    this.events.publish('user:logout');
  }
}
