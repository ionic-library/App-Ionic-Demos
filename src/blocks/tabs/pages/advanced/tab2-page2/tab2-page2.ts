import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab2-page2'
})
@Component({
  templateUrl: './tab2-page2.html'
})
export class TabsAdvanced {
  tab2Page3 = 'tab2-page3';

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
