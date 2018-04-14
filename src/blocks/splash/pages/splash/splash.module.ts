import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SplashPage }					from './splash';

@NgModule({
	declarations: [
		SplashPage
	],
	imports: [
		IonicPageModule.forChild(SplashPage)
	],
	entryComponents: [
		SplashPage
	]
})
export class RestAPIPageModule { }
