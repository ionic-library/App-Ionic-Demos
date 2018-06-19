import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Tabs } from '../../../../../..';

@IonicPage({
  name: 'tab1-page1'
})
@Component({
  templateUrl: 'tabs-advanced-tab1-page1.html'
})
export class TabsAdvancedTab1Page1 {
  tab1Page2 = 'tab1-page2';
  color: boolean;
  userId: string;

  constructor(public navCtrl: NavController, public app: App, public tabs: Tabs, public params: NavParams) {
    this.userId = params.get('userId');
  }

  goBack() {
    console.log('go back begin');
    this.navCtrl.pop().then((val: any) => {
      console.log('go back completed', val);
    });
  }

  favoritesTab() {
    this.tabs.select(1);
  }

  logout() {
    // this.app.getRootNavById().setRoot('sign-in', null, { animate: true, direction: 'back' });
  }

  ionViewWillEnter() {
    console.log('TabsAdvancedTab1Page1, ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('TabsAdvancedTab1Page1, ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('TabsAdvancedTab1Page1, ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('TabsAdvancedTab1Page1, ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('TabsAdvancedTab1Page1, ionViewWillUnload');
  }
}
