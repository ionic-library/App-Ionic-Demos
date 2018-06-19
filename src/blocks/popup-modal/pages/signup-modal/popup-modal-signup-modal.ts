import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-modal-signup-modal',
  templateUrl: 'popup-modal-signup-modal.html'
})
export class PopupModalSignupModal {

  slides = [
    {
      id: 1,
      imageUrl: 'assets/img/slides/square.png',
    },
    {
      id: 2,
      imageUrl: 'assets/img/slides/square-2.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/img/slides/square-3.jpg',
    },
  ];

  constructor(public viewCtrl: ViewController) {
  }

  signup() {
    this.viewCtrl.dismiss();
  }

  login() {
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
