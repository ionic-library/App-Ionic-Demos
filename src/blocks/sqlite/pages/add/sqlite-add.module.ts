import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { DataPageAdd }					from './data-add';

@NgModule({
	declarations: [
		DataPageAdd
	],
	imports: [
		IonicPageModule.forChild(DataPageAdd)
	],
	entryComponents: [
		DataPageAdd
	]
})
export class SqliteAddModule { }
