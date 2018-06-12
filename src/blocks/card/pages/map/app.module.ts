import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class CardMap {}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class CardMap {
  rootPage = CardMap;
}

@NgModule({
  declarations: [
    CardMap,
    CardMap
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CardMap)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CardMap
  ]
})
export class CardMap {}
