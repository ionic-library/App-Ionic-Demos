import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from '../../../../../../..';

@IonicPage( /* { segment: 'thirdPage/paramOne/:paramOne/paramTwo/:paramTwo' } */ )
@Component({
  templateUrl: 'nav-advanced-nav-3.html'
})
export class NavAdvancedNav3 {
  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = params.data.paramOne;
    this.paramTwo = params.data.paramTwo;
  }
}
