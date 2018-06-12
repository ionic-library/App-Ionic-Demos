import { Component } from '@angular/core';
import { IonicPage, Tabs } from '../../../../../..';

@IonicPage({
  name: 'tab1-page2'
})
@Component({
  templateUrl: './tab1-page2.html'
})
export class TabsAdvanced {
  tab1Page3 = 'tab1-page3';

  constructor(public tabs: Tabs) { }

  favoritesTab() {
    // TODO fix this with tabsHideOnSubPages=true
    this.tabs.select(1);
  }

  ionViewWillEnter() {
    console.log('TabsAdvanced, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvanced, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvanced, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvanced, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvanced, ionViewWillUnload');
  }
}
