import { Component }					from '@angular/core';
import  {IonicPage }					from 'ionic-angular';
import { NavParams }					from 'ionic-angular';
import { NavController }				from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expandable-header-page-one',
  templateUrl: 'expandable-header-page-one.html'
})
export class ExpandableHeaderPageOne {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

}
