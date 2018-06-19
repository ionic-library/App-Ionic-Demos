import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from '../../../../../../..';

@IonicPage(/*{segment: 'sixthPage/paramOne/:paramOne/paramTwo/:paramTwo'}*/)
@Component({
  templateUrl: 'nav-simple-nested-peer-navs-06.html'
})
export class NavSimpleNestedPeerNavs06 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = params.data.paramOne;
    this.paramTwo = params.data.paramTwo;
  }
}
