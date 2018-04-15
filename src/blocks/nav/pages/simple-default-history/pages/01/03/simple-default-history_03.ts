import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
  segment: 'pageThree/paramOne/:paramOne/paramTwo/:paramTwo',
  defaultHistory: [
    'FirstPage'
  ]
})
@Component({
  templateUrl: 'third-page.html'
})
export class SimpleDefaultHistory0103 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
