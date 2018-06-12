import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Slides } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesOptionsModule {
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

  ngAfterViewInit() {
    this.slider.paginationBulletRender = (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`;
    };
  }
}

@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class SlidesOptionsModule {
  root = SlidesOptions;
}

@NgModule({
  declarations: [
    SlidesOptions,
    SlidesOptions
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SlidesOptions)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesOptions,
    SlidesOptions
  ]
})
export class SlidesOptionsModule {}
