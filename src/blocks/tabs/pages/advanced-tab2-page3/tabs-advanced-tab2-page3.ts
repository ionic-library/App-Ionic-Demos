import { Component } from '@angular/core';
import { IonicPage, NavController} from '../../../../../..';

@IonicPage({
  name: 'tab2-page3'
})
@Component({
  templateUrl: 'tabs-advanced-tab2-page3.html'
})
export class TabsAdvancedTab2Page3 {

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
    console.log('TabsAdvancedTab2Page3, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab2Page3, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab2Page3, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab2Page3, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab2Page3, ionViewWillUnload');
  }
}
