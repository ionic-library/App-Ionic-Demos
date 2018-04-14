import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { FlashCardPage } from './flash-card';

@NgModule({
	declarations: [
		FlashCardPage,
	],
	imports: [
		IonicPageModule.forChild(FlashCardPage),
		SharedModule,
	],
	exports: [
		FlashCardPage
	]
})

export class FlashCardPageModule { }
