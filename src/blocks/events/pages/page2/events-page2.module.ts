import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { Events2Page } from './events_2';

@NgModule({
	declarations: [
		Events2Page,
	],
	imports: [
		IonicPageModule.forChild(Events2Page),
	],
	entryComponents: [
		Events2Page,
	]
})
export class EventsPage2Module { }

