import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'session-detail.html'
})
export class ItemGroups {
  session: any;

  constructor(params: NavParams, public navCtrl: NavController) {
    this.session = params.data;
  }
}
