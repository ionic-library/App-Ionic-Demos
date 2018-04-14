import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { DataPageEdit }					from './data-edit';

@NgModule({
	declarations: [
		DataPageEdit
	],
	imports: [
		IonicPageModule.forChild(DataPageEdit)
	],
	entryComponents: [
		DataPageEdit
	]
})
export class DataPageEditModule { }
