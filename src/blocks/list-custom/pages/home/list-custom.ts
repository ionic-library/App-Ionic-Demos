import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController, NavParams }		from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-list-custom',
	templateUrl: 'list-custom.html',
})
export class ListCustomPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListCustomPage');
	}

}
