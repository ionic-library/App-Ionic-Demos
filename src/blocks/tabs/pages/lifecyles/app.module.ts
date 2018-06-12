import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertController, IonicApp, IonicModule, NavController } from '../../../..';

//
// Tab 1
//
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Lifecyles</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <p>ionViewCanEnter ({{called.ionViewCanEnter}})</p>
      <p>ionViewCanLeave ({{called.ionViewCanLeave}})</p>
      <p>ionViewWillLoad ({{called.ionViewWillLoad}})</p>
      <p>ionViewDidLoad ({{called.ionViewDidLoad}})</p>
      <p>ionViewWillEnter ({{called.ionViewWillEnter}})</p>
      <p>ionViewDidEnter ({{called.ionViewDidEnter}})</p>
      <p>ionViewWillLeave ({{called.ionViewWillLeave}})</p>
      <p>ionViewDidLeave ({{called.ionViewDidLeave}})</p>

      <button ion-button (click)="push()">push()</button>
      <button ion-button (click)="openAlert()">open alert</button>
    </ion-content>
    `
})
export class TabsLifecylesModule {
  called: any;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {
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
    this.navCtrl.push(TabsLifecyles);
  }

  openAlert() {
    this.alertCtrl.create({
      title: 'Example'
    }).present();
  }

  ionViewCanEnter() {
    this.called.ionViewCanEnter++;
    return true;
  }

  ionViewCanLeave() {
    this.called.ionViewCanLeave++;
    return true;
  }

  ionViewWillLoad() {
    this.called.ionViewWillLoad++;
  }

  ionViewDidLoad() {
    this.called.ionViewDidLoad++;
  }

  ionViewWillEnter() {
    this.called.ionViewWillEnter++;
  }

  ionViewDidEnter() {
    this.called.ionViewDidEnter++;
  }

  ionViewWillLeave() {
    this.called.ionViewWillLeave++;
  }

  ionViewDidLeave() {
    this.called.ionViewDidLeave++;
  }
}

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Plain List" tabIcon="star" [root]="root"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="logo-facebook" [root]="root"></ion-tab>
    </ion-tabs>
  `
})
export class TabsLifecylesModule {
  root = TabsLifecyles;
}

@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class TabsLifecylesModule {
  root = TabsLifecyles;
}

@NgModule({
  declarations: [
    TabsLifecyles,
    TabsLifecyles,
    TabsLifecyles
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TabsLifecyles, {
      tabsHighlight: true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsLifecyles,
    TabsLifecyles,
    TabsLifecyles
  ]
})
export class TabsLifecylesModule {}
