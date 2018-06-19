import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage(/*{segment: 'thirdPage/paramOne/:paramOne/paramTwo/:paramTwo'}*/)
@Component({
  templateUrl: 'nav-toggle-basic-7.html'
})
export class NavToggleBasic7 {

  paramOne: string;
  paramTwo: string;

  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
