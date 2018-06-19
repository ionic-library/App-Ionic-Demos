import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab2-page1'
})
@Component({
  templateUrl: 'tabs-advanced-tab2-page1.html'
})
export class TabsAdvancedTab2Page1 {
  tab2Page2 = 'tab2-page2';

  ionViewWillEnter() {
    console.log('TabsAdvancedTab2Page1, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab2Page1, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab2Page1, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab2Page1, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab2Page1, ionViewWillUnload');
  }
}
