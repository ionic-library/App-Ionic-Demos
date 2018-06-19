import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { ListCustomPage }				from './list-custom';

@NgModule({
	declarations: [
		ListCustomPage,
	],
	imports: [
		IonicPageModule.forChild(ListCustomPage),
	],
})
export class ListCustomHomeModule { }
