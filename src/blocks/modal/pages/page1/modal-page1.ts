import { Component } from '@angular/core';
import { ModalController } from '../../../../../src';

import { ModalPage } from '../modal-page/modal-page';

@Component({
  templateUrl: 'modal-page1.html'
})
export class ModalPage1 {
  myParam = '';

  constructor(public modalCtrl: ModalController) {}

  openBasicModal() {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }
  openModalWithParams() {
    let myModal = this.modalCtrl.create(ModalPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
