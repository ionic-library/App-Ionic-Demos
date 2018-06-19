import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home-demo-page-home',
	templateUrl: 'home-demo-page-home.html'
})
export class HomeDemoPageHome {

	drawerOptions: any;
	constructor(public navCtrl: NavController) {
		this.drawerOptions = {
			handleHeight: 50,
			thresholdFromBottom: 200,
			thresholdFromTop: 200,
			bounceBack: true
		};
	}
}
