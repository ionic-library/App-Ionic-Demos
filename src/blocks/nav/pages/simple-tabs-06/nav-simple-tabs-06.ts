import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* {  segment: 'pageFive/userId/:userId/name/:name'} */ )
@Component({
  templateUrl: 'nav-simple-tabs-06.html'
})
export class NavSimpleTabs06 {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push('SixthPage', { paramOne: 'taco taco taco', paramTwo: 'yum yum yum'});
  }
}
