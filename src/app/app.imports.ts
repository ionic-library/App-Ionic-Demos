// Global state (used for theming)
import { AppState }						from './app.global';

// MODULES ----------------------------------------------------------------------------------------
import { BrowserModule }				from '@angular/platform-browser';
import { HttpModule }					from '@angular/http';
import { HttpClient }					from '@angular/common/http';
import { HttpClientModule }				from '@angular/common/http';

// Ionic native providers -------------------------------------------------------------------------
/*
import { CardIO } 						from '@ionic-native/card-io';
import { BarcodeScanner } 				from '@ionic-native/barcode-scanner';
import { Camera } 						from '@ionic-native/camera';
import { Diagnostic } 					from '@ionic-native/diagnostic';
import { Geolocation } 					from '@ionic-native/geolocation';
import { StatusBar } 					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';
import { GoogleMaps }					from '@ionic-native/google-maps';
import { SQLite }						from '@ionic-native/sqlite';
*/

// SERVICES ---------------------------------------------------------------------------------------
import { LoggerService }				from '../blocks/logger/services/logger/logger-service';

// PROVIDER ---------------------------------------------------------------------------------------
/*
import { CameraProvider }				from '../blocks/camera/provider/camera';

import { DataSQLiteProvider } 			from '../blocks/sqlite/provider/provider/data-sqlite';
import { MockSQLiteProvider }			from '../blocks/mock-sqlite/provider/mock-sqlite';
import { RestAPIProvider } 				from '../blocks/rest-api/provider/rest-api';

import { NativeGoogleMapsProvider }		from '../blocks/ionic-native-google-maps/provider/native-google-maps';
*/

// Directives -------------------------------------------------------------------------------------

export const MODULES = [
	BrowserModule,
	HttpModule,
	HttpClientModule,
];

export const PROVIDERS = [
	LoggerService,
	AppState,
	/*
	DataSQLiteProvider,
	MockSQLiteProvider,
	{ provide: SQLite, useClass: MockSQLiteProvider }
	*/
];

export const DIRECTIVES = [
];
