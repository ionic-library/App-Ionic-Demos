import { Platform }						from 'ionic-angular';
import { Injectable }					from '@angular/core';
import { Subject }						from 'rxjs';
import { Shake }						from '@ionic-native/shake';

import { AudioService }					from '../../audio/services/audio';

@Injectable()
export class MotionProvider {
	axisMovement: number = 0;
	watchEvent: any;
	movementSubject = new Subject();

	constructor(public audioCtrl: AudioService,
		public platform: Platform,
		public shake: Shake) {
	}

	startWatchingSwings() {
		if (this.platform.is('cordova')) {
			this.watchEvent = this.shake.startWatch(10).subscribe(() => {
				this.audioCtrl.swingLightSaber();
			});
		} else {
			window.ondevicemotion = (event) => {
				var accelerationX = Math.abs(event.accelerationIncludingGravity.x);
				let swing = Math.abs(this.axisMovement - accelerationX);

				if (swing >= 10) {
					this.audioCtrl.swingLightSaber();
					this.axisMovement = accelerationX;
				} else {
					this.axisMovement = accelerationX;
				}
			}
		}
	}

	stopWatchingSwings() {
		if (this.platform.is('cordova')) {
			if (this.watchEvent) {
				this.watchEvent.unsubscribe();
			}
		} else {
			window.ondevicemotion = null;
		}
	}
}
