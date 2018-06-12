import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
	template: 'action-sheet_3.html'
})
export class ActionSheet03Modal {

	constructor(public viewCtrl: ViewController) { }

	dismiss() {
		this.viewCtrl.dismiss();
	}
}