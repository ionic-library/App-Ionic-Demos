import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'pageThree/paramOne/:paramOne/paramTwo/:paramTwo',defaultHistory: ['FirstPage']} */)
@Component({
  templateUrl: 'nav-simple-default-history-03.html'
})
export class NavSimpleDefaultHistory03 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
