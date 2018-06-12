import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, NavController, NavParams } from '../../../..';


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Root</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="pushPage()">Push Page</button>
    </ion-content>`,
})
export class NavInsertViewsModule {
  constructor(public navCtrl: NavController) {}

  pushPage() {
    this.navCtrl.push(NavInsertViews);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Root</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h1>Second page</h1>
      <button ion-button block (click)="insertPage()">Insert Page</button>
      <button ion-button block (click)="removePage()">Remove Page</button>
      <button ion-button block (click)="removeTwoPages()">Remove Two Pages</button>
      <button ion-button block (click)="testThing()">Test Thing</button>
    </ion-content>
  `
})
export class NavInsertViewsModule {
  _index: number = 0;

  constructor(public navCtrl: NavController) {}

  insertPage() {
    this.navCtrl.insert(1, NavInsertViews, {
      index: this._index++
    }).then(() => {
      console.log('INSERTED! Stack:\n', this.navCtrl.getViews());
    });
  }

  removePage() {
    this.navCtrl.remove(1, 1).then(() => {
      console.log('REMOVED! Stack:\n', this.navCtrl.getViews());
    });
  }

  removeTwoPages() {
    this.navCtrl.remove(this.navCtrl.length() - 2, 2).then(() => {
      console.log('REMOVED TWO! Stack:\n', this.navCtrl.getViews());
    });
  }

  testThing() {
    console.log('TEST THING');
    this.navCtrl.push(NavInsertViews).then(() => {
      console.log('Pushed', this.navCtrl.getViews());
      console.log('Removing', this.navCtrl.getActive().index - 1);
      this.navCtrl.remove(this.navCtrl.getActive().index - 1, 1);
      console.log('REMOVED! Stack:\n', this.navCtrl.getViews());
    });
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Inserted Paged {{index}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      Inserted Page
    </ion-content>
  `
})
export class NavInsertViewsModule {
  index: any;
  constructor(params: NavParams) {
    this.index = params.get('index');
  }
}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class NavInsertViewsModule {
  root = NavInsertViews;
}

@NgModule({
  declarations: [
    NavInsertViews,
    NavInsertViews,
    NavInsertViews,
    NavInsertViews
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NavInsertViews)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NavInsertViews,
    NavInsertViews,
    NavInsertViews,
    NavInsertViews
  ]
})
export class NavInsertViewsModule {}
