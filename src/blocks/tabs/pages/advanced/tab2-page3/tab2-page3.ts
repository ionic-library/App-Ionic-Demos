import { Component } from '@angular/core';
import { IonicPage, NavController} from '../../../../../..';

@IonicPage({
  name: 'tab2-page3'
})
@Component({
  templateUrl: './tab2-page3.html'
})
export class TabsAdvanced {

  constructor(public navCtrl: NavController) {}

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
