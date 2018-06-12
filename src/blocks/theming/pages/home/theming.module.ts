import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { ThemingPage } from './theming';

@NgModule({
	declarations: [
		ThemingPage,
	],
	imports: [
		IonicPageModule.forChild(ThemingPage),
	],
	exports: [
		ThemingPage
	]
})

export class ThemingHomeModule { }
