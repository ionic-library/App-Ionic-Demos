import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule } from '../../app/app.shared.modules';

import { RealEstateListingPage } from './real-estate-listing';

@NgModule({
	declarations: [
		RealEstateListingPage,
	],
	imports: [
		IonicPageModule.forChild(RealEstateListingPage),
		SharedModule,
	],
	exports: [
		RealEstateListingPage
	]
})
export class RealEstateListPageOneModule { }
