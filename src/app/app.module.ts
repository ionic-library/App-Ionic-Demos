import { NgModule, ErrorHandler } 		from '@angular/core';
import { IonicApp, IonicModule } 		from 'ionic-angular';
import { IonicErrorHandler } 			from 'ionic-angular';
import { BrowserModule } 				from '@angular/platform-browser';

import { SharedModule } 				from './app.shared.modules';

import { MainApp } 						from './app.component';

@NgModule({
	declarations: [ MainApp ],
	imports: [ SharedModule, IonicModule.forRoot(MainApp /* { preloadModules: true } */),
	],
	bootstrap: [IonicApp],
	entryComponents: [ MainApp ],
	providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
