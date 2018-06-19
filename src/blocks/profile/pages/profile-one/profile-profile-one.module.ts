import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { ProfileOnePage }				from './profile-one';

@NgModule({
	declarations: [
		ProfileOnePage,
	],
	imports: [
		IonicPageModule.forChild(ProfileOnePage),
	],
	exports: [
		ProfileOnePage
	]
})

export class ProfileProfileOneModule { }
