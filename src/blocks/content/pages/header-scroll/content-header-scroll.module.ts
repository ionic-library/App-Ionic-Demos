import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, ScrollEvent } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ContentHeaderScrollModule {

  onScroll(ev: ScrollEvent) {
    ev.domWrite(() => {
      // DOM writes must go within domWrite()
      // to prevent any layout thrashing
      ev.headerElement.style.transform = `translateY(${-ev.scrollTop}px)`;
    });
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ContentHeaderScrollModule {
  root = ContentHeaderScroll;
}

@NgModule({
  declarations: [
    ContentHeaderScroll,
    ContentHeaderScroll,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ContentHeaderScroll)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContentHeaderScroll,
    ContentHeaderScroll,
  ]
})
export class ContentHeaderScrollModule {}
