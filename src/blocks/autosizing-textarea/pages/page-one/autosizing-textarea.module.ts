import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { AutosizingTextarea }			from './autosizing-textarea';

@NgModule({
	declarations: [
		AutosizingTextarea,
	],
	imports: [
		IonicPageModule.forChild(AutosizingTextarea),
		SharedModule,
	],
	exports: [
		AutosizingTextarea,
	]
})

export class AutosizingTextareaPageModule { }
