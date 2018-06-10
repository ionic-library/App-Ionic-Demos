// Global state (used for theming)
import { AppState }						from './app.global';

// MODULES ----------------------------------------------------------------------------------------
import { SwingModule }					from 'angular2-swing';
import { BrowserModule }				from '@angular/platform-browser';
import { HttpModule }					from '@angular/http';
import { HttpClient }					from '@angular/common/http';
import { HttpClientModule }				from '@angular/common/http';

// Ionic native providers -------------------------------------------------------------------------
import { CardIO } 						from '@ionic-native/card-io';
import { BarcodeScanner } 				from '@ionic-native/barcode-scanner';
import { Camera } 						from '@ionic-native/camera';
import { Diagnostic } 					from '@ionic-native/diagnostic';
import { Geolocation } 					from '@ionic-native/geolocation';
import { StatusBar } 					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';
import { GoogleMaps }					from '@ionic-native/google-maps';
import { SQLite }						from '@ionic-native/sqlite';

// SERVICES ---------------------------------------------------------------------------------------
import { AlertService }					from '../blocks/alert/services/alert';
import { ConsoleLoggerService } 		from '../blocks/logger/services/console-service/console-logger';
import { LoggerService }				from '../blocks/logger/services/service/logger';
import { ToastService }					from '../blocks/toast/services/service/toast';

// PROVIDER ---------------------------------------------------------------------------------------
import { CameraProvider }				from '../blocks/camera/provider/camera';

import { DataSQLiteProvider } 			from '../blocks/sqlite/provider/provider/data-sqlite';
import { MockSQLiteProvider }			from '../blocks/mock-sqlite/provider/mock-sqlite';
import { RestAPIProvider } 				from '../blocks/rest-api/provider/rest-api';

import { NativeGoogleMapsProvider }		from '../blocks/ionic-native-google-maps/provider/native-google-maps';

// Directives -------------------------------------------------------------------------------------
import { SlidingDrawer }				from '../blocks/sliding-drawer/directive/sliding-drawer';
import { Autosize }						from '../blocks/autosize/directive/autosize';

export const MODULES = [
	SwingModule,
	BrowserModule,
	HttpModule,
	HttpClientModule,
];

export const PROVIDERS = [
	AlertService,
	LoggerService,
	ToastService,
	AppState,
	CameraProvider,
	NativeGoogleMapsProvider, MockSQLiteProvider,

	// Ionic native specific providers
	BarcodeScanner,
	Camera,
	Diagnostic,
	Geolocation,
	CardIO,
	StatusBar,
	SplashScreen,
	GoogleMaps,

	RestAPIProvider,
	DataSQLiteProvider,
	MockSQLiteProvider,
	{ provide: SQLite, useClass: MockSQLiteProvider }
];

export const DIRECTIVES = [
	SlidingDrawer,
	Autosize,
];
