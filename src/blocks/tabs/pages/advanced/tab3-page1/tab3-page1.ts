import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage({
  name: 'tab3-page1'
})
@Component({
  templateUrl: './tab3-page1.html'
})
export class TabsAdvanced {

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
