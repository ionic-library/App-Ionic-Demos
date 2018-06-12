import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SwingModule }					from 'angular2-swing';

import { TinderCardsPage }				from './tinder-cards';
import { SharedModule } 				from '../../../app/app.shared.modules';


@NgModule({
	declarations: [
		TinderCardsPage,
	],
	imports: [
		IonicPageModule.forChild(TinderCardsPage),
		SwingModule,
		SharedModule
	],
	exports: [
		TinderCardsPage
	]
})

export class TinderCardsPage { }
