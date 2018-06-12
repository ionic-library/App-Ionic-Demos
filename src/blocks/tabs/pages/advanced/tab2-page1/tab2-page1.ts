import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab2-page1'
})
@Component({
  templateUrl: './tab2-page1.html'
})
export class TabsAdvanced {
  tab2Page2 = 'tab2-page2';

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
