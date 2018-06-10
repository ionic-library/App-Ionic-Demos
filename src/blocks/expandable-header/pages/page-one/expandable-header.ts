import { Component }					from '@angular/core';
import  {IonicPage }					from 'ionic-angular';
import { NavParams }					from 'ionic-angular';
import { NavController }				from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

}
