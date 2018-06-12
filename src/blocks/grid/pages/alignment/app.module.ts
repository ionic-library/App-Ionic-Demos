import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class GridAlignmentModule {}


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class GridAlignmentModule {
  rootPage = GridAlignment;
}


@NgModule({
  declarations: [
    GridAlignment,
    GridAlignment
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GridAlignment)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GridAlignment,
    GridAlignment
  ]
})
export class GridAlignmentModule {}
