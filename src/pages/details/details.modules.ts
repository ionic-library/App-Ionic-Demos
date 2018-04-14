import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { DetailsPage }					from './details';

import { HeaderComponentModule }		from './../../components/header/header.module';

@NgModule({
	declarations: [
		DetailsPage
	],
	imports: [
		HeaderComponentModule,
		IonicPageModule.forChild(DetailsPage)
	],
	exports: [
		DetailsPage
	],
	providers: [
	]
})
export class HomePageModule { }
