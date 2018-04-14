import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { ExpandableHeaderPage }			from './expandable-header';

@NgModule({
	declarations: [
		ExpandableHeaderPage,
	],
	imports: [
		IonicPageModule.forChild(ExpandableHeaderPage),
		SharedModule,
	],
	exports: [
		ExpandableHeaderPage
	]
})

export class ExpandableHeaderPageModule { }
