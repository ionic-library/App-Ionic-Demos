import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'thirdPage/paramOne/:paramOne/paramTwo/:paramTwo',defaultHistory: ['FirstPage']}*/)
@Component({
  templateUrl: 'nav-simple-nav-then-default-history-03.html'
})
export class NavSimpleNavThenDefaultHistory03 {

  paramOne: string;
  paramTwo: string;

  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
