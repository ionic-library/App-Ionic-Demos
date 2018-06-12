import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Events, IonicApp, IonicModule } from '../../../..';

//
// Tab 1
//
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Home</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <p>Tap the third tab below to fire broken events</p>
      <p>Then change to Tab 2 and back to Home</p>
      <p>{{datatest}} called: {{called}}</p>
      <button ion-button (click)="change()">Fire events correctly</button>
    </ion-content>
    `
})
export class TabsEventsModule {
  datatest: string = 'old';
  called: number = 0;
  constructor(public events: Events) {
    this.events.subscribe('data:changed', this.change.bind(this));
  }
  change() {
    console.log(this.datatest);
    console.log('data changed!');
    this.called++ ;
    this.datatest = 'new!';
  }
}

//
// Tab 2
//
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tab 2</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    Change back to home
    </ion-content>
  `
})
export class TabsEventsModule {}


@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Home" tabIcon="star" [root]="root1" ></ion-tab>
      <ion-tab tabTitle="Tab 2" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Break events" tabIcon="camera" (ionSelect)="takePhoto()"></ion-tab>
    </ion-tabs>
  `
})
export class TabsEventsModule {
  root1 = TabsEvents;
  root2 = TabsEvents;

  constructor(public events: Events) { }
  takePhoto() {
    this.events.publish('data:changed');
  }
}

@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class TabsEventsModule {
  root = TabsEvents;
}

@NgModule({
  declarations: [
    TabsEvents,
    TabsEvents,
    TabsEvents,
    TabsEvents
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TabsEvents, {
      tabsHighlight: true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsEvents,
    TabsEvents,
    TabsEvents,
    TabsEvents
  ]
})
export class TabsEventsModule { }
