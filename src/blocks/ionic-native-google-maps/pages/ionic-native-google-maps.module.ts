import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { NativeGoogleMapsPage } from './ionic-native-google-maps';

@NgModule({
	declarations: [
		NativeGoogleMapsPage,
	],
	imports: [
		IonicPageModule.forChild(NativeGoogleMapsPage),
	],
	exports: [
		NativeGoogleMapsPage
	]
})
export class NativeGoogleMapsPageModule { }
