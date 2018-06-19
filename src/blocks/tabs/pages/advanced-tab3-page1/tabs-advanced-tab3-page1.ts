import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab3-page1'
})
@Component({
  templateUrl: 'tabs-advanced-tab3-page1.html'
})
export class TabsAdvancedTab3Page1 {

  ionViewWillEnter() {
    console.log('TabsAdvancedTab3Page1, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab3Page1, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab3Page1, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab3Page1, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab3Page1, ionViewWillUnload');
  }
}
