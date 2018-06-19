import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { Buttons1Page } from './page-one';

@NgModule({
	declarations: [
		Buttons1Page,
	],
	imports: [
		IonicPageModule.forChild(Buttons1Page),
	],
	entryComponents: [
		Buttons1Page,
	]
})
export class ButtonPageOneModule { }
