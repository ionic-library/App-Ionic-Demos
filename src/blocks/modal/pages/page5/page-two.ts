import { Component } from '@angular/core';
import { ActionSheetController, AlertController, App, IonicPage, ModalController, NavController, ToastController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'page-two.html'
})
export class ModalPage5 {
  items: any[] = [];
  called: any;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
  ) {
    for (let i = 0; i < 50; i++) {
      this.items.push({
        value: (i + 1)
      });
    }

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

  push() {
    this.toastCtrl.create({
      message: 'Will push a page in a moment...',
      duration: 1000,
    }).present();

    setTimeout(() => {
      this.navCtrl.push('PageThree', {
        id: 8675309,
        myData: [1, 2, 3, 4]
      });
    }, 500);
  }

  dismiss() {
    this.navCtrl.parent.pop();
  }

  ionViewCanEnter() {
    console.log('ModalPage5 ionViewCanEnter fired');
    this.called.ionViewCanEnter++;
    return true;
  }

  ionViewCanLeave() {
    console.log('ModalPage5 ionViewCanLeave fired');
    this.called.ionViewCanLeave++;
    return true;
  }

  ionViewWillLoad() {
    console.log('ModalPage5 ionViewWillLoad fired');
    this.called.ionViewWillLoad++;
  }

  ionViewDidLoad() {
    console.log('ModalPage5 ionViewDidLoad fired');
    this.called.ionViewDidLoad++;
  }

  ionViewWillEnter() {
    console.log('ModalPage5 ionViewWillEnter fired');
    this.called.ionViewWillEnter++;
  }

  ionViewDidEnter() {
    console.log('ModalPage5 ionViewDidEnter fired');
    let alert = this.alertCtrl.create({
      title: 'Test',
      buttons: [
          {
              text: 'Something',
              role: 'cancel'
          }
      ]
    });
    alert.present();
    this.called.ionViewDidEnter++;
  }

  ionViewWillLeave() {
    console.log('ModalPage5 ionViewWillLeave fired');
    this.called.ionViewWillLeave++;
  }

  ionViewDidLeave() {
    console.log('ModalPage5 ionViewDidLeave fired');
    this.called.ionViewDidLeave++;
  }

  openModal() {
    this.modalCtrl.create('ContactUs').present();
  }

  openActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Go To Root',
          handler: () => {
            actionSheet.dismiss().then(() => {
              this.navCtrl.parent.pop();
            });

            // by default an alert will dismiss itself
            // however, we don't want to use the default
            // but rather fire off our own pop navigation
            // return false so it doesn't pop automatically
            return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel this clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
