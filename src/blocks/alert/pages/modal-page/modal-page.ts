import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
	template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <button ion-button (click)="dismiss()" strong>Close</button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      Hi, I'm Bob, and I'm a modal.
      <div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div><div f></div>
    </ion-content>
  `
})
export class AlertModalPage {
	constructor(private viewCtrl: ViewController) { }

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
