import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ListRepeatHeadersModule {
  people = [
    {'name': 'Burt', 'components': [ 'all the things']},
    {'name': 'Mary', 'components': [ 'checkbox', 'content', 'form']},
    {'name': 'Albert', 'components': [ 'tabs']}
  ];
}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class ListRepeatHeadersModule {
  rootPage = ListRepeatHeaders;
}

@NgModule({
  declarations: [
    ListRepeatHeaders,
    ListRepeatHeaders
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ListRepeatHeaders)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListRepeatHeaders,
    ListRepeatHeaders
  ]
})
export class ListRepeatHeadersModule {}
