import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'pageSix/paramOne/:paramOne/paramTwo/:paramTwo',defaultHistory: ['FourthPage']}*/)
@Component({
  templateUrl: 'nav-simple-tabs-default-history6.html'
})
export class NavSimpleTabsDefaultHistory6 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
