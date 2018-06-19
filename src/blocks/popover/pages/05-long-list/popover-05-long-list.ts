import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'popover-05-long-list.html'
})
export class Popover05LongList {
  items: number[] = [];

  ngOnInit() {
    for (let i = 1; i < 21; i++) {
      this.items.push(i);
    }
  }
}
