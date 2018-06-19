import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  selector: 'page-nav-simple-nested-navs4',
  template: `
  <ion-nav [root]="rootPage"></ion-nav>

  `
})
export class NavSimpleNestedNavs4 {

  rootPage: any = 'FirstPage';
  constructor(public navCtrl: NavController) {

  }

}
