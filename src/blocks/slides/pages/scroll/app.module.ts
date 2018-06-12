import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesScrollModule {}

@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class SlidesScrollModule {
  root = SlidesScroll;
}

@NgModule({
  declarations: [
    SlidesScroll,
    SlidesScroll
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SlidesScroll)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesScroll,
    SlidesScroll
  ]
})
export class SlidesScrollModule {}

