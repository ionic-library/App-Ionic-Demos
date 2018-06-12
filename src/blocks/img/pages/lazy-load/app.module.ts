import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ImgLazyLoadModule {

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ImgLazyLoadModule {
  root = ImgLazyLoad;
}


@NgModule({
  declarations: [
    ImgLazyLoad,
    ImgLazyLoad
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ImgLazyLoad)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ImgLazyLoad,
    ImgLazyLoad
  ]
})
export class ImgLazyLoadModule {}
