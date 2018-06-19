import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController } 				from 'ionic-angular';

import { ToastController } 				from 'ionic-angular';

import { RestAPIProvider }				from '../../providers/provider/rest-api';

@IonicPage()
@Component({
	selector: 'page-rest-api-page-one',
	templateUrl: 'rest-api-page-one.html'
})
export class RestApiPageOne {

	countries: string[];
	errorMessage: string;

	constructor(
		public navCtrl: NavController,
		public rest: RestAPIProvider,
		private toastCtrl: ToastController
	) { }

	presentToast(msg: string, duration: any) {
		let toast = this.toastCtrl.create({
		  message: msg,
		  duration: duration
		});
		toast.present();
	  }

	ionViewDidLoad() {
		this.presentToast('Load Countries...', '1000')

		this.getCountries();
	}

	getCountries() {
		this.rest.getCountries()
			.subscribe(
				countries => this.countries = countries,
				error => this.errorMessage = <any>error);
	}

}
