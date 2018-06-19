import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab1-page3'
})
@Component({
  templateUrl: 'tabs-advanced-tab1-page3.html'
})
export class TabsAdvancedTab1Page3 {

  constructor() { }

  ionViewWillEnter() {
    console.log('TabsAdvancedTab1Page3, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab1Page3, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab1Page3, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab1Page3, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab1Page3, ionViewWillUnload');
  }
}
