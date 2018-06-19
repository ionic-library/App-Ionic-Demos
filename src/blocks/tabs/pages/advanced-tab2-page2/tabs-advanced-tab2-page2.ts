import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab2-page2'
})
@Component({
  templateUrl: 'tabs-advanced-tab2-page2.html'
})
export class TabsAdvancedTab2Page2 {
  tab2Page3 = 'tab2-page3';

  ionViewWillEnter() {
    console.log('TabsAdvancedTab2Page2, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab2Page2, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab2Page2, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab2Page2, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab2Page2, ionViewWillUnload');
  }
}
