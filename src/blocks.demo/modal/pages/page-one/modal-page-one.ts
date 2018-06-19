import { Component } from '@angular/core';
import { ModalController } from '../../../../../src';

import { ModalModalPage } from '../modal-page/modal-page';

@Component({
  templateUrl: 'modal-page-one.html'
})
export class ModalPageOne {
  myParam = '';

  constructor(public modalCtrl: ModalController) {}

  openBasicModal() {
    let myModal = this.modalCtrl.create(ModalModalPage);
    myModal.present();
  }
  openModalWithParams() {
    let myModal = this.modalCtrl.create(ModalModalPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
