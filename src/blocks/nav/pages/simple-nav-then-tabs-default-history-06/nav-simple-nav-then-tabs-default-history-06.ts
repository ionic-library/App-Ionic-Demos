import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'sixthPage/paramOne/:paramOne/paramTwo/:paramTwo',defaultHistory: ['FourthPage']}*/)
@Component({
  templateUrl: 'nav-simple-nav-then-tabs-default-history-06.html'
})
export class NavSimpleNavThenTabsDefaultHistory06 {

  paramOne: string;
  paramTwo: string;

  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
