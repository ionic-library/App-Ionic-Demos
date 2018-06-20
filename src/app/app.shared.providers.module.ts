import { NgModule }						from '@angular/core';

import { AppState }						from './app.global';
import { LoggerService }				from '../blocks/logger/services/logger/logger-service';

export const providers = [

	LoggerService,
	AppState,
	/*
	DataSQLiteProvider,
	MockSQLiteProvider,
	{ provide: SQLite, useClass: MockSQLiteProvider }
	*/
];

@NgModule({
	declarations: [providers],
	exports: [providers]
})
export class ProvidersModule { }
