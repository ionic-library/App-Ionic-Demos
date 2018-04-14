import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

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
export class Buttons1PageModule { }
