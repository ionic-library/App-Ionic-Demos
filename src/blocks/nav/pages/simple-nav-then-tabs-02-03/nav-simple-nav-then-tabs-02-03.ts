import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'thirdPage/paramOne/:paramOne/paramTwo/:paramTwo'}*/)
@Component({
  templateUrl: 'nav-simple-nav-then-tabs-02-03.html'
})
export class NavSimpleNavThenTabs0203 {

  paramOne: string;
  paramTwo: string;

  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
