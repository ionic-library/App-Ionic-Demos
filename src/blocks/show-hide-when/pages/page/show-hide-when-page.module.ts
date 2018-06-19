import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ShowHideWhenPageModule {
  toggle = true;
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ShowHideWhenPageModule {
  root = ShowHideWhenPage;
}

@NgModule({
  declarations: [
    ShowHideWhenPage,
    ShowHideWhenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ShowHideWhenPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ShowHideWhenPage,
    ShowHideWhenPage
  ]
})
export class ShowHideWhenPageModule {}
