import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ImgListModule {
  items: {avatar: string, thumbnail: string, id: number}[] = [];

  constructor() {
    for (var i = 0; i < 100; i++) {
      this.items.push({
        id: i,
        avatar: getRandomImg(),
        thumbnail: getRandomImg()
      });
    }
  }

}

const images = [
  'bandit.jpg',
  'batmobile.jpg',
  'blues-brothers.jpg',
  'bueller.jpg',
  'delorean.jpg',
  'eleanor.jpg',
  'general-lee.jpg',
  'ghostbusters.jpg',
  'knight-rider.jpg',
  'mirth-mobile.jpg'
];

function getRandomImg(): string {
  let imgString = images[Math.floor(Math.random() * images.length)];
  let src = 'assets/img/' + imgString;
  return src;
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ImgListModule {
  root = ImgList;
}


@NgModule({
  declarations: [
    ImgList,
    ImgList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ImgList)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ImgList,
    ImgList
  ]
})
export class ImgListModule {}
