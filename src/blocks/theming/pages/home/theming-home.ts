import { Component }					from '@angular/core';
import { NavController, IonicPage }		from 'ionic-angular';

import { AppState }						from './../../app/app.global';

@IonicPage()
@Component({
	selector: 'page-theming-home',
	templateUrl: 'theming-home.html'
})
export class ThemingHome {

	constructor(public navCtrl: NavController, public global: AppState) { }

	changeTheme(theme) {
		this.global.set('theme', theme);
	}
}
