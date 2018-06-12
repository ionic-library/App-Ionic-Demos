import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-modal-nav',
	templateUrl: 'modal-nav.html',
})
export class ModalNavMoveDocumentModalNav {
	modalPage: any;
	modalParams: any = {};

	constructor(
		public navParams: NavParams,
		public viewCtrl: ViewController
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModalNavMoveDocumentModalNav');
		this.modalPage = this.navParams.get('page');
	}

	dismissModal(data) {
		this.viewCtrl.dismiss(data);
	}
}
