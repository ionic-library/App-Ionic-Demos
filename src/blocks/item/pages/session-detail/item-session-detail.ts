import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'item-session-detail.html'
})
export class ItemSessionDetail {
  session: any;

  constructor(params: NavParams, public navCtrl: NavController) {
    this.session = params.data;
  }
}
