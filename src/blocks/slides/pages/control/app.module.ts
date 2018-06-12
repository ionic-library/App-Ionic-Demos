import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Slides } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesControlModule {
  @ViewChild('firstSlider') slider1: Slides;
  @ViewChild('secondSlider') slider2: Slides;
}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class SlidesControlModule {
  root: any = SlidesControl;
}

@NgModule({
  declarations: [
    SlidesControl,
    SlidesControl
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SlidesControl)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesControl,
    SlidesControl
  ]
})
export class SlidesControlModule {}
