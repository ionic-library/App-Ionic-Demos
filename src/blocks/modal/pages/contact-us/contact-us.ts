import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'contact-us.html'
})
export class ModalContactUs {
  root = 'PageTwo';

  constructor() {
    console.log('ModalContactUs constructor');
  }
  ionViewDidLoad() {
    console.log('ModalContactUs ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('ModalContactUs ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('ModalContactUs ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ModalContactUs ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ModalContactUs ionViewDidLeave');
  }
  ionViewWillUnload() {
    console.log('ModalContactUs ionViewWillUnload');
  }
}
