import { Component }					from '@angular/core';
import  {IonicPage }					from 'ionic-angular';
import { NavController }				from 'ionic-angular';
import { MenuController }				from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-countdown',
	templateUrl: 'countdown.html'
})
export class CountdownPage {

	constructor(
		public navCtrl: NavController,
		public menu: MenuController
	) { }
}
