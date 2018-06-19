import { Component } from '@angular/core';

@IonicPage(/*{segment: 'pageSix/paramOne/:paramOne/paramTwo/:paramTwo'}*/)
@Component({
  templateUrl: 'nav-simple-tabs-05.html'
})
export class NavSimpleTabs05 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
