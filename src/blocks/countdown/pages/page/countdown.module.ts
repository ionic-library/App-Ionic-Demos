import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { CountdownPage }				from './countdown';

@NgModule({
	declarations: [
		CountdownPage,
	],
	imports: [
		IonicPageModule.forChild(CountdownPage),
		SharedModule,
	],
	exports: [
		CountdownPage
	]
})

export class CountdownPageModule { }
