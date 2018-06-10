import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { RestAPIPageHome }				from './rest-api';

@NgModule({
	declarations: [
		RestAPIPageHome
	],
	imports: [
		IonicPageModule.forChild(RestAPIPageHome)
	],
	entryComponents: [
		RestAPIPageHome
	]
})
export class RestAPIPageModule { }
