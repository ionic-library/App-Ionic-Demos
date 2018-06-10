import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController, NavParams }		from 'ionic-angular';
import { ToastController } 				from 'ionic-angular';

import { DataSQLiteProvider }			from '../../provider/provider/data-sqlite';

// ------------------------------------------------------------------------------------------------
@IonicPage()
@Component({
	selector: 'page-data-edit',
	templateUrl: 'data-edit.html',
})
export class DataPageEdit {
	public db: any;

	data = { rowid: 0, date: "", type: "", description: "", amount: 0 };

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public database: DataSQLiteProvider,
		private toastCtrl: ToastController
	) {
		var prefix = 'DataPageEdit::constructor: ';
		console.log(prefix + '#01 ');

		this.db = database;

		var rowid=navParams.get("rowid");
		console.log(prefix + '#01 ' + 'rowid=' + rowid);

		this.getCurrentData(rowid);
	}

	presentToast(msg: string, duration: any) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: duration
		});
		toast.present();
	}

	getCurrentData(rowid) {
		var prefix = 'DataPageEdit::getCurrentData: ';
		console.log(prefix + '#01 ' + 'rowid=' + rowid);

		this.db.getCurrentData(rowid)
		this.data = this.db.data;
	}

	updateData() {
		var prefix = 'DataPageEdit::updateData: ';
		console.log(prefix + '#01 ');

		this.db.updateData(this.data)

		console.log(prefix + '#02 ' + 'back to root');
		this.navCtrl.popToRoot();
	}
}
