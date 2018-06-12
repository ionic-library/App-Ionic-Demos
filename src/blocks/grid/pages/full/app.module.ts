import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class GridFullModule {}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class GridFullModule {
  rootPage = GridFull;
}

@NgModule({
  declarations: [
    GridFull,
    GridFull
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GridFull)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GridFull,
    GridFull
  ]
})
export class GridFullModule {}
