import { HttpClient }					from '@angular/common/http';
import { Injectable }					from '@angular/core';

import { ToastController }				from 'ionic-angular';

import { SQLite, SQLiteObject }			from '@ionic-native/sqlite';

@Injectable()
export class SqliteProvider {

	private dbfields = [
		{ name: "rowid", type: "INTEGER PRIMARY KEY" },
		{ name: "date", type: "TEXT" },
		{ name: "type", type: "TEXT" },
		{ name: "description", type: "TEXT" },
		{ name: "amount", type: "INT" }
	]

	public data = { rowid: 0, date: "", type: "", description: "", amount: 0 };
	public db;

	public expenses: any;
	public totalIncome: any;
	public totalExpense: any;
	public balance: any;

	constructor(
		public http: HttpClient,
		public sqlite: SQLite,
		private toastCtrl: ToastController
	) {
		var prefix = 'SqliteProvider::constructor:: ';
		console.log(prefix + '#1 ');

		var fields = this.dbfields.map(function (e) { return e.name + ' ' + e.type; }).join(", ");
		console.log(prefix + '#2 ' + 'fields=' + fields);
	}

	presentToast(msg: string, duration: any) {
		console.log(msg);

		this.toastCtrl.create({
			message: msg,
			duration: duration
		}).present();
	}

	createTable() {
		var prefix = 'SqliteProvider::createTable:: ';
		console.log(prefix + '#1 ');

		return this.sqlite.create({
			name: 'ionicdb.db',
			location: 'default'
		})
		.then((db: SQLiteObject) => {
			console.log(prefix + '#02 ' + ': create table');

			this.db = db;

			db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
			.then(res => console.log(prefix + '#03 ' + ' create table done'))
			.catch(e  => console.log(prefix + '#04 ' + e));
		})
	}

	getData(){
		var prefix = 'SqliteProvider::getData::';
		console.log(prefix + '#01 ');

		var sqlitedb=this.sqlite.create({ name: 'ionicdb.db', location: 'default' })
		.then((db: SQLiteObject) => {
			console.log(prefix + '#02 ' + ': create table');

			db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
			.then(res => console.log(prefix + '#03 ' + 'create table done'))
			.catch(e  => console.log(prefix + '#04 ' + e));

			console.log(prefix + '#05 ' + 'query data');

			db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
			.then(res => {
				this.expenses = [];
				for (var i = 0; i < res.rows.length; i++) {
					var item=res.rows.item(i);
					this.expenses.push({ rowid: item.rowid, date: item.date, type: item.type, description: item.description, amount: item.amount })
					console.log(prefix + '#06 ' + 'item ' + this.expenses.length + '"' + item.description + '"')
				}
				console.log(prefix + '#07 ' + 'read ' + this.expenses.length + ' items')
			})
			.catch(e => console.log(prefix + '#08 ' + e));
		})
		.catch(e => console.log(prefix + ':' + e));

		console.log(prefix + '#99 done');
		return sqlitedb;
	}

	getCurrentData(rowid) {
		console.log('SqliteProvider::getCurrentData');

		this.sqlite.create({
			name: 'ionicdb.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			db.executeSql('SELECT * FROM expense WHERE rowid=?', [rowid]
			).then(res => {
				if (res.rows.length > 0) {
					this.data.rowid = res.rows.item(0).rowid;
					this.data.date = res.rows.item(0).date;
					this.data.type = res.rows.item(0).type;
					this.data.description = res.rows.item(0).description;
					this.data.amount = res.rows.item(0).amount;
				}
			}).catch(e => {
				console.log(e);
				this.presentToast(e, '5000');
			});
		}).catch(e => {
			console.log(e);
			let toast = this.toastCtrl.create({
				message: e,
				duration: 5000
			});
			toast.present();
		});
	}

	deleteData(rowid) {
		console.log('SqliteProvider::deleteData');

		this.sqlite.create({
			name: 'ionicdb.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
				.then(res => {
					console.log(res);
					this.getData();
				})
				.catch(e => console.log(e));
		}).catch(e => console.log(e));
	}

	saveData(data) {
		console.log('SqliteProvider::saveData: data=' + data);

		this.sqlite.create({ name: 'ionicdb.db', location: 'default' })
		.then((db: SQLiteObject) => {
			db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)', [data.date, data.type, data.description, data.amount]
			).then(res => {
				console.log('SqliteProvider::saveData: Data saved');
				this.presentToast('Data saved', '5000');
			}).catch(e => { this.presentToast(e, '5000') });
		})
		.catch(e => { this.presentToast(e, '5000') });
	}

	updateData(data) {
		console.log('SqliteProvider::updateData data=' + data);

		this.sqlite.create({ name: 'ionicdb.db', location: 'default' })
		.then((db: SQLiteObject) => {
			db.executeSql('UPDATE expense SET date=?,type=?,description=?,amount=? WHERE rowid=?', [data.date, data.type, data.description, data.amount, data.rowid])
				.then(res => { this.presentToast('Data updated', '5000') })
				.catch(e  => { this.presentToast(e, '5000') });
		})
		.catch(e => { this.presentToast(e, '5000') });
	}


	/*
	getDataWithPromise(email: string, password: string): Promise {
		var whateverResultValue = 0;

		return new Promise((resolve, reject) => {
			this.data.description = "New value I'm adding";

			if (whateverResultValue) {
				resolve(this.data);
			} else {
				reject(error);
			}
		});
	}
	*/
}
