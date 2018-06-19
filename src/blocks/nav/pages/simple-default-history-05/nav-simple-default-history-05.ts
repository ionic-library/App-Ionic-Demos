import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'pageFive/userId/:userId/name/:name', defaultHistory: ['FourthPage'] } */ )
@Component({
  templateUrl: 'nav-simple-default-history-05.html'
})
export class NavSimpleDefaultHistory05 {

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
