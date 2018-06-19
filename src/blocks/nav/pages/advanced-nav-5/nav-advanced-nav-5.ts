import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'pageFive/user/:userId/name/:name' } */ )
@Component({
  templateUrl: 'nav-advanced-nav-5.html'
})
export class NavAdvancedNav5 {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push('SixthPage', { paramOne: 'Tobey', paramTwo: 'Holly'});
  }
}
