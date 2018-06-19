import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* {  segment: 'pageTwo/userId/:userId/name/:name'} */ )
@Component({
  templateUrl: 'nav-simple-tabs-02.html'
})
export class NavSimpleTabs02 {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push('ThirdPage', { paramOne: 'one one one', paramTwo: 'two two two'});
  }
}
