import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage( /* { segment: 'pageTwo/userId/:userId/name/:name', defaultHistory: [ 'FirstPage' ] } */ )
@Component({
  templateUrl: 'nav-simple-default-history-02.html'
})
export class NavSimpleDefaultHistory02 {

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
