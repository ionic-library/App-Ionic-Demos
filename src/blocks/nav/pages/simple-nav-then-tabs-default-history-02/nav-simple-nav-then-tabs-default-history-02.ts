import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'secondPage/user/:userId/name/:name', defaultHistory: ['FirstPage'] } */ )
@Component({
  templateUrl: 'nav-simple-nav-then-tabs-default-history-02.html'
})
export class NavSimpleNavThenTabsDefaultHistory02 {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push('ThirdPage', { paramOne: 'Tobey', paramTwo: 'Kevin'});
  }
}
