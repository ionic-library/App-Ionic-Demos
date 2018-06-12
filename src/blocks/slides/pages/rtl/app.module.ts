import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicApp, IonicModule, Slides } from  '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SlidesRtlModule {
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
export class SlidesRtlModule {
  root = SlidesRtl;
}

@NgModule({
  declarations: [
    SlidesRtl,
    SlidesRtl
  ],
  imports: [
    IonicModule.forRoot(SlidesRtl)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SlidesRtl,
    SlidesRtl
  ]
})
export class SlidesRtlModule { }
