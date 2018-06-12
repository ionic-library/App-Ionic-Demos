import { Component }					from '@angular/core';
import { NavController, IonicPage }		from 'ionic-angular';

import { ToastService }					from '../../../toast/services/service/toast';

@IonicPage()
@Component({
	selector: 'page-profile-three',
	templateUrl: 'profile-three.html'
})
export class ProfileProfileThree {

	posts = [
		{
			postImageUrl: 'assets/img/background/background-2.jpg',
			text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
			date: 'November 5, 2016',
			likes: 12,
			comments: 4,
			timestamp: '11h ago'
		},
		{
			postImageUrl: 'assets/img/background/background-3.jpg',
			text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
			date: 'October 23, 2016',
			likes: 30,
			comments: 64,
			timestamp: '30d ago'
		},
		{
			postImageUrl: 'assets/img/background/background-4.jpg',
			date: 'June 28, 2016',
			likes: 46,
			text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
			comments: 66,
			timestamp: '4mo ago'
		},
	];

	user = {
		name: 'Cosima Niehaus',
		twitter: '@CheekyEvoDevo',
		profileImage: '../assets/img/avatar/cosima-avatar.jpg',
		followers: 456,
		following: 1052,
		tweets: 35
	};

	constructor(public navCtrl: NavController, public toastCtrl: ToastService) { }

	ionViewDidLoad() {
		console.log('Hello ProfileThree Page');
	}

	imageTapped(post) {
		this.toastCtrl.create('Post image clicked');
	}

	comment(post) {
		this.toastCtrl.create('Comments clicked');
	}

	like(post) {
		this.toastCtrl.create('Like clicked');
	}

}
