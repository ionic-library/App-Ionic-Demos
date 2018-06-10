import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { ProfileThreePage }				from './profile-three';

@NgModule({
	declarations: [
		ProfileThreePage,
	],
	imports: [
		IonicPageModule.forChild(ProfileThreePage),
	],
	exports: [
		ProfileThreePage
	]
})

export class ProfileThreePageModule { }
