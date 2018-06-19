import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ListChatListModule {
  testClick(ev: UIEvent) {
    console.log(ev);
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ListChatListModule {
  root = ListChatList;
}

@NgModule({
  declarations: [
    ListChatList,
    ListChatList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ListChatList)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListChatList,
    ListChatList
  ]
})
export class ListChatListModule {}
