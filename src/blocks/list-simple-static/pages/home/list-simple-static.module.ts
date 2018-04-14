import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { ListSimpleStaticPageHome }				from './list-simple-static';

@NgModule({
	declarations: [
		ListSimpleStaticPageHome,
	],
	imports: [
		IonicPageModule.forChild(ListSimpleStaticPageHome),
	],
	exports: [
		ListSimpleStaticPageHome
	]
})

export class ListSimpleStaticPageModule { };
