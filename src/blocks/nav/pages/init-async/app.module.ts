import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  template: `
    <ion-content padding text-center>
      Page be loaded!
    </ion-content>
  `
})
export class NavInitAsyncModule {}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class NavInitAsyncModule {
  root: NavInitAsync;

  constructor() {
    setTimeout(() => {
      this.root = NavInitAsync;
    }, 1000);

  }
}

@NgModule({
  declarations: [
    NavInitAsync,
    NavInitAsync
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NavInitAsync)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NavInitAsync,
    NavInitAsync
  ]
})
export class NavInitAsyncModule {}
