import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
  segment: 'pageSix/paramOne/:paramOne/paramTwo/:paramTwo',
  defaultHistory: ['FourthPage']
})
@Component({
  templateUrl: 'sixth-page.html'
})
export class NavSimpleDefaultHistory {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
