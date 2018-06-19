import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'nav-nav-push-pop1.html'
})
export class NavNavPushPop1 {
  pushPage: any = 'SecondPage';
  visible: boolean = false;
  buttons: number[] = [1, 2, 3, 4, 5];

  ionViewDidEnter() {
    this.visible = true;
  }
}
