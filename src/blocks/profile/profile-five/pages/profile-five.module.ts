import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { ProfileFivePage }				from './profile-five';

import { ParallaxHeaderDirectiveModule } from '../../../parallax-header/components/parallax-header.module';

@NgModule({
	declarations: [
		ProfileFivePage,
	],
	imports: [
		IonicPageModule.forChild(ProfileFivePage),
		ParallaxHeaderDirectiveModule
	],
	exports: [
		ProfileFivePage
	]
})

export class ProfileFivePageModule { }
