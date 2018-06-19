import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Slides } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesControllerModule {
  @ViewChild('mySlider') slider: Slides;

  onSlideChanged() {
    let previousIndex = this.slider.getPreviousIndex();
    let currentIndex = this.slider.getActiveIndex();
    console.log('Previous index is', previousIndex, 'Current index is', currentIndex);
  }

  onSlideMove(ev: any) {
    console.log('Slide moving', ev);
  }

  goToPrevSlide() {
    this.slider.slidePrev();
  }

  goToNextSlide() {
    this.slider.slideNext();
  }

  goToSlide(index: number) {
    this.slider.slideTo(index);
  }

  getIndex() {
    let index = this.slider.getActiveIndex();
    console.log('Current Index is', index);
  }

  getLength() {
    let length = this.slider.length();
    console.log('Current Length is', length);
  }
}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class SlidesControllerModule {
  root: any = SlidesController;
}

@NgModule({
  declarations: [
    SlidesController,
    SlidesController
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SlidesController)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesController,
    SlidesController
  ]
})
export class SlidesControllerModule {}
