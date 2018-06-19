import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { ChatsPage } 					from './chats';

import { SharedModule }					from '../../../app/app.shared.modules';

@NgModule({
	declarations: [
		ChatsPage,
	],
	imports: [
		IonicPageModule.forChild(ChatsPage),
		SharedModule
	],
	exports: [
		ChatsPage
	]
})

export class ChatChatModule { }
