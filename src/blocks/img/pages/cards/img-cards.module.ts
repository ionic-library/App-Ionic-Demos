import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';

@Component({
  templateUrl: 'main.html'
})
export class ImgCardsModule {
  items: number[] = [];

  constructor() {
    for (var i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ImgCardsModule {
  root = ImgCards;
}


@NgModule({
  declarations: [
    ImgCards,
    ImgCards
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ImgCards)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ImgCards,
    ImgCards
  ]
})
export class ImgCardsModule {}
