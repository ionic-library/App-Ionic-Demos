import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController, NavParams } 	from 'ionic-angular';

import { ModalNavPage }					from '../modal-nav/modal-nav';

@IonicPage()
@Component({
	selector: 'page-move-document',
	templateUrl: 'move-document.html',
})
export class MoveDocumentPage {
	thisFolder: any;
	folders: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalNavPage: ModalNavPage
	) {
		this.initData();
	}

	initData() {
		this.thisFolder = this.navParams.get('folder') || {
			name: 'Documents'
		};

		this.folders = [
			{ name: 'My Folder 1', },
			{ name: 'My Folder 2' },
			{ name: 'My Folder 3' },
			{ name: 'My Folder 4' }
		];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MoveDocumentPage');
	}

	goToFolder(folder) {
		this.navCtrl.push('MoveDocumentPage', { folder });
	}

	moveHere(folder) {
		this.modalNavPage.dismissModal(folder);
	}
}
