import { ElementRef, Injectable } 		from '@angular/core';

import { CameraPosition } 				from '@ionic-native/google-maps';
import { GoogleMap } 					from '@ionic-native/google-maps';
import { GoogleMapOptions } 			from '@ionic-native/google-maps';
import { GoogleMaps, } 					from '@ionic-native/google-maps';
import { GoogleMapsAnimation } 			from '@ionic-native/google-maps';
import { GoogleMapsEvent } 				from '@ionic-native/google-maps';
import { GoogleMapsMapTypeId } 			from '@ionic-native/google-maps';
import { LatLng } 						from '@ionic-native/google-maps';
import { MarkerOptions } 				from '@ionic-native/google-maps';

import { Geolocation }					from '@ionic-native/geolocation';

@Injectable()
export class IonicNativeGoogleMapsProvider {
	map: GoogleMap;

	constructor(
		public geolocation: Geolocation,
		private googleMaps: GoogleMaps) {
	}

	// Note: Call this method on ngAfterViewInit
	create(element: ElementRef) {
		const mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: 43.0741904,
					lng: -89.3809802
				},
				zoom: 18,
				tilt: 10
			},
			mapType: GoogleMapsMapTypeId.NORMAL,
			controls: {
				compass: true,
				myLocationButton: true,
				indoorPicker: true,
				zoom: true
			},
			gestures: {
				scroll: true,
				tilt: true,
				rotate: true,
				zoom: true
			},
			preferences: null
		};

		this.map = this.googleMaps.create(element.nativeElement, mapOptions);
		return this.map.one(GoogleMapsEvent.MAP_READY);
	}

	centerToGeolocation() {
		return this.getGeolocationPosition().then((position) => {
			return this.centerToPosition(position);
		}, error => {
			return Promise.reject(error);
		});
	}

	getGeolocationPosition() {
		return new Promise((resolve, reject) => {
			this.geolocation.getCurrentPosition().then((position) => {
				const latLng: LatLng = new LatLng(position.coords.latitude, position.coords.longitude);
				resolve(latLng);
			}, error => {
				reject(error);
			});
		});
	}

	centerToPosition(latLng: any, zoom?: number, tilt?: number) {
		const cameraPosition = {
			target: latLng,
			zoom: zoom || 18,
			tilt: tilt || 10
		};
		return this.map.animateCamera(cameraPosition);
	}

	addMarker(position, title: string, infoClickCallback, animated = true) {
		const markerOptions: MarkerOptions = {
			position,
			title,
			animation: animated ? GoogleMapsAnimation.BOUNCE : null,
			infoWindowAnchor: infoClickCallback
		};

		return this.map.addMarker(markerOptions);
	}

	addMarkerToGeolocation(title: string, infoClickCallback, animated?: boolean) {
		this.getGeolocationPosition().then(position => {
			this.addMarker(position, title, infoClickCallback, animated);
		});
	}
}
