import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { MessagesPage }					from './messages';

@NgModule({
	declarations: [
		MessagesPage,
	],
	imports: [
		IonicPageModule.forChild(MessagesPage),
		SharedModule,
	],
	exports: [
		MessagesPage
	]
})

export class ChatMessages { }
