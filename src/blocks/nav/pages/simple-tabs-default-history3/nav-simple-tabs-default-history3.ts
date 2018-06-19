import { Component } from '@angular/core';
import { xIonicPage, xNavController, xNavParams } from '../../../../../../..';

@IonicPage(/*{segment: 'pageThree/paramOne/:paramOne/paramTwo/:paramTwo',defaultHistory: ['FirstPage']}*/)
@Component({
  templateUrl: 'nav-simple-tabs-default-history3.html'
})
export class NavSimpleTabsDefaultHistory3 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
