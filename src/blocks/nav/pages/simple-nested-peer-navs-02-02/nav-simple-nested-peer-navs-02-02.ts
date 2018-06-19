import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'pageTwo/user/:userId/name/:name' } */ )
@Component({
  templateUrl: 'nav-simple-nested-peer-navs-02-02.html'
})
export class NavSimpleNestedPeerNavs0202 {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push('ThirdPage', { paramOne: 'mono', paramTwo: 'stereo'});
  }
}
