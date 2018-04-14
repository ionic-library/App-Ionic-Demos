import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { DataPageHome }					from './data-home';

@NgModule({
	declarations: [
		DataPageHome
	],
	imports: [
		IonicPageModule.forChild(DataPageHome)
	],
	entryComponents: [
		DataPageHome
	]
})
export class DataPageAddModule { }
