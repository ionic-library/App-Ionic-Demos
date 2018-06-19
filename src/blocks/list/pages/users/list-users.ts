import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-users',
  templateUrl: 'list-users.html',
})
export class ListUsers {
  users = new Array(10);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

}
