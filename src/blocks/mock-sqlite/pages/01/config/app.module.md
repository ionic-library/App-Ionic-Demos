
import { SQLite, SQLiteDatabaseConfig }	from '@ionic-native/sqlite';
import { MockSQLiteProvider }					from '../providers/mock-sqlite/mock-sqlite';

@NgModule({

	...

	providers: [
		...
		{ provide: SQLite, useClass: MockSQLiteProvider },
	]
})
export class AppModule { }

