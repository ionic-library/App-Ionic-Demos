import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class CardSocial {}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class CardSocial {
  rootPage = CardSocial;
}

@NgModule({
  declarations: [
    CardSocial,
    CardSocial
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CardSocial)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CardSocial
  ]
})
export class CardSocial {}
