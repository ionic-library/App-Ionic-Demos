import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';

import { Camera }						from '@ionic-native/camera';

import { ToastService }					from '../../../toast/services/service/toast';
import { AlertService }					from '../../../alert/services/alert';

@IonicPage()
@Component({
	selector: 'page-profile-settings',
	templateUrl: 'profile-settings.html',
})

export class ProfileProfileSettings {
	profilePicture: string;
	profileRef: any;
	errorMessage: any;
	placeholderPicture = 'https://api.adorable.io/avatar/200/bob';

	enableNotifications = true;
	language: any;
	currency: any;
	paymentMethod: any;

	languages = ['English', 'Portuguese', 'French'];
	paymentMethods = ['Paypal', 'Credit Card'];
	currencies = ['USD', 'BRL', 'EUR'];

	user = {
		name: 'Marty Mcfly',
		imageUrl: 'assets/img/avatar/marty-avatar.png'
	};

	constructor(
		public alertService: AlertService,
		public toastCtrl: ToastService,
		public camera: Camera
	) { }

	toggleNotifications() {
		if (this.enableNotifications) {
			this.toastCtrl.create('Notifications enabled.');
		} else {
			this.toastCtrl.create('Notifications disabled.');
		}
	}

	updateImage(value) {
		this.profilePicture = 'data:image/jpeg;base64,' + value.val();
	}

	updateProfileImage() {
		this.camera.getPicture({
			quality: 50,
			allowEdit: true,
			cameraDirection: this.camera.Direction.FRONT,
			destinationType: this.camera.DestinationType.DATA_URL
		}).then((imageData) => {
			this.user.imageUrl = imageData;
		}, (err) => {
			this.toastCtrl.create('Error: ' + err);
		});
	}

	logOut() {
		this.alertService.presentAlertWithCallback('Are you sure?',
			'This will log you out of this application.').then((yes) => {
				if (yes) {
					this.toastCtrl.create('Logged out of the application');
				}
			});
	}
}
