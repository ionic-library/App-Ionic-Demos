import { Component } from '@angular/core';
import { AlertController, IonicPage, NavParams, ToastController, ViewController } from '../../../../../..';

import { SomeAppProvider } from '../../services/some-app-provider';
import { SomeComponentProvider } from './provider';

@IonicPage()
@Component({
  templateUrl: 'modal-pass-data.html',
  providers: [
    SomeComponentProvider
  ]
})
export class ModalModalPassData {
  data: any;
  called: any;

  constructor(
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    params: NavParams,
    someComponentProvider: SomeComponentProvider,
    someAppProvider: SomeAppProvider) {
    this.data = {
      userId: params.get('userId'),
      name: someComponentProvider.getName()
    };
    console.log('SomeAppProvider Data', someAppProvider.getData());

    this.called = {
      ionViewCanEnter: 0,
      ionViewCanLeave: 0,
      ionViewWillLoad: 0,
      ionViewDidLoad: 0,
      ionViewWillEnter: 0,
      ionViewDidEnter: 0,
      ionViewWillLeave: 0,
      ionViewDidLeave: 0
    };
  }

  submit() {
    console.time('modal');
    this.viewCtrl.dismiss(this.data);
  }

  ionViewCanEnter() {
    console.log('ModalModalPassData ionViewCanEnter fired');
    this.called.ionViewCanEnter++;

    return true;
  }

  ionViewCanLeave() {
    console.log('ModalModalPassData ionViewCanLeave fired');
    this.called.ionViewCanLeave++;

    return new Promise((resolve: any, reject: any) => {
      this.alertCtrl.create()
        .setTitle('Do you want to submit?')
        .addButton({ text: 'Submit', handler: resolve })
        .addButton({ text: 'Cancel', role: 'cancel', handler: reject })
        .present();
    });
  }

  ionViewWillLoad() {
    console.log('ModalModalPassData ionViewWillLoad fired');
    this.called.ionViewWillLoad++;
  }

  ionViewDidLoad() {
    console.log('ModalModalPassData ionViewDidLoad fired');
    this.called.ionViewDidLoad++;
  }

  ionViewWillEnter() {
    console.log('ModalModalPassData ionViewWillEnter fired');
    this.called.ionViewWillEnter++;
  }

  ionViewDidEnter() {
    console.log('ModalModalPassData ionViewDidEnter fired');
    this.toastCtrl.create({
      message: 'test toast',
      duration: 1000
    }).present();
    this.called.ionViewDidEnter++;
  }

  ionViewWillLeave() {
    console.log('ModalModalPassData ionViewWillLeave fired');
    this.called.ionViewWillLeave++;
  }

  ionViewDidLeave() {
    console.log('ModalModalPassData ionViewDidLeave fired');
    this.called.ionViewDidLeave++;
  }
}
