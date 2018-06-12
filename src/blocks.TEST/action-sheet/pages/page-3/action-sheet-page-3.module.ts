import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ActionSheet3Page } from './action-sheet-page-3';

@NgModule({
	declarations: [
		ActionSheet3Page,
	],
	imports: [
		IonicPageModule.forChild(ActionSheet3Page),
	],
	entryComponents: [
		ActionSheet3Page,
	]
})
export class ActionSheet03Modal { }
