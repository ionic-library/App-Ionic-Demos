import { Component } from '@angular/core';
import { IonicPage, NavController } from '../../../../../..';

@IonicPage()
@Component({
  selector: 'page-nav-simple-nested-navs2',
  template: `
  <ion-nav [root]="rootPage"></ion-nav>

  `
})
export class NavSimpleNestedNavs2 {

  rootPage: any = 'ThirdNav';
  constructor(public navCtrl: NavController) {

  }

}
