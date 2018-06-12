import { Component }					from '@angular/core';
import { ViewChild, ElementRef }		from '@angular/core';
import { IonicPage, NavController } 	from 'ionic-angular';

import { NativeGoogleMapsProvider }		from '../provider/native-google-maps';

@IonicPage()
@Component({
	selector: 'page-native-google-maps',
	templateUrl: 'ionic-native-google-maps.html',
})
export class IonicNativeGoogleMapsPage {

	@ViewChild('map') mapElement: ElementRef;

	constructor(
		public navCtrl: NavController,
		public mapsCtrl: NativeGoogleMapsProvider) {
	}

	// Load map only after view is initialized
	ngAfterViewInit() {
		this.mapsCtrl.create(this.mapElement).then(() => this.mapsCtrl.centerToGeolocation());
	}

	addMarker() {
		this.mapsCtrl.addMarkerToGeolocation('Click me!', this.callbackSample);
	}

	callbackSample() {
		alert('The callback was called :D');
	}
}
