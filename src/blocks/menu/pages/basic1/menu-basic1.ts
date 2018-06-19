import { Component } from '@angular/core';
import { IonicPage, ViewController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'menu-basic1.html'
})
export class MenuBasic1 {
  constructor(public viewController: ViewController) {
  }

  close() {
    this.viewController.dismiss();
  }
}
