import { Component } from '@angular/core';
import { App, IonicPage, Tabs } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'tabs-basic-tab-one.html'
})
export class TabsBasicTabOne {
  items: any[] = [];

  constructor(private tabs: Tabs, private app: App) {
    for (var i = 1; i <= 250; i++) {
      this.items.push(i);
    }
  }

  selectPrevious() {
    this.tabs.select(this.tabs.previousTab());
  }

  appNavPop() {
    this.app.navPop();
  }
}
