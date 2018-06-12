import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController }				from 'ionic-angular';

import { DataPageAdd }					from './../data-add/data-add';
import { DataPageEdit }					from './../data-edit/data-edit';

import { DataSQLiteProvider }			from '../../provider/provider/data-sqlite';

// ------------------------------------------------------------------------------------------------
@IonicPage()
@Component({
	selector: 'page-data-home',
	templateUrl: 'data-home.html'
})
export class SqliteHome {

	expenses: any = [];
	totalIncome = 0;
	totalExpense = 0;
	balance = 0;

	public db: any;

	constructor(
		public navCtrl: NavController,
		public database: DataSQLiteProvider
	) {
		var prefix = 'SqliteHome::constructor: ';
		console.log(prefix + '#01 ');

		this.db = database;
	 }

	ionViewDidLoad() {
		var prefix = 'SqliteHome::ionViewDidLoad: ';
		console.log(prefix + '#01 ');

		/*
		console.log(prefix + 'get the data');
		this.getData();
		*/
	}

	ionViewWillEnter() {
		var prefix = 'SqliteHome::ionViewWillEnter:: ';
		console.log(prefix + '#01 ');

		console.log(prefix + '#02 ' + 'get the data');
		this.getData();
	}

	getData() {
		var prefix = 'SqliteHome::getData:: ';
		console.log(prefix + '#01 ');

		console.log(prefix + '#02 ' + 'get data');
		this.db.getData()
		.then( () => {
			console.log(prefix + '#03 ' + 'collect data');
			this.expenses = this.db.expenses;
			console.log(prefix + '#04 ' + 'data=' + this.expenses);
		})
		.catch(e  => console.log(prefix + '#05 ' + e));
	}

	addData(rowid) {
		var prefix = 'SqliteHome::addData:: ';
		console.log(prefix + '#01 ' + 'rowid=' + rowid);

		this.navCtrl.push('DataPageAdd');
	}

	editData(rowid) {
		var prefix = 'SqliteHome::editData:: ';
		console.log(prefix + '#01 ' + 'rowid=' + rowid);

		this.navCtrl.push('DataPageEdit', { rowid: rowid });
	}

	deleteData(rowid) {
	}

}
