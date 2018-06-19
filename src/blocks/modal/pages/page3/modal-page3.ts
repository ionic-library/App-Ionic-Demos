import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'modal-page3.html'
})
export class ModalPage3 {
  constructor(public navCtrl: NavController, params: NavParams) {
    console.log('Second page params:', params);
  }

  ionViewDidLoad() {
    console.log('ModalPage3 ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ModalPage3 ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ModalPage3 ionViewDidEnter');
  }
}
