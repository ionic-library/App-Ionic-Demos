import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Slides } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesBasicModule {
  @ViewChild(Slides) slider: Slides;

  onSlideWillChange(s: Slides) {
    console.log(`onSlideWillChange: ${s}`);
  }

  onSlideDidChange(s: Slides) {
    console.log(`onSlideDidChange: ${s}`);
  }

  onSlideDrag(s: Slides) {
    console.log(`onSlideDrag: ${s}`);
  }

}

@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class SlidesBasicModule {
  root = SlidesBasic;
}

@NgModule({
  declarations: [
    SlidesBasic,
    SlidesBasic
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SlidesBasic)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesBasic,
    SlidesBasic
  ]
})
export class SlidesBasicModule {}
