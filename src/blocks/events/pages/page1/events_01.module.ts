import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { Events1Page } from './events_1';

@NgModule({
	declarations: [
		Events1Page,
	],
	imports: [
		IonicPageModule.forChild(Events1Page),
	],
	entryComponents: [
		Events1Page,
	]
})
export class EventsPage1Module { }
