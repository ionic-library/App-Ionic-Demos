import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ActionSheet1Page } from './page-one';

@NgModule({
	declarations: [
		ActionSheet1Page,
	],
	imports: [
		IonicPageModule.forChild(ActionSheet1Page),
	],
	entryComponents: [
		ActionSheet1Page,
	]
})
export class ActionSheetPageOneModule { }
