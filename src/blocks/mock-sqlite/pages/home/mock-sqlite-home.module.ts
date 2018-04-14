import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { SwingModule }					from 'angular2-swing';

import { SharedModule }					from '../../../../app/app.shared.modules';

import { MockSQLitePageHome }			from './mock-sqlite-home';



@NgModule({
	declarations: [
		MockSQLitePageHome,
	],
	imports: [
		IonicPageModule.forChild(MockSQLitePageHome),
		SwingModule,
		SharedModule
	],
	exports: [
		MockSQLitePageHome
	]
})

export class TinderCardsPageModule { }
