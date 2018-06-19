import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SpinnerColorsModule {
  paused: boolean = false;

  toggleState() {
    this.paused = !this.paused;
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class SpinnerColorsModule {
  root = SpinnerColors;
}

@NgModule({
  declarations: [
    SpinnerColors,
    SpinnerColors
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SpinnerColors)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpinnerColors,
    SpinnerColors
  ]
})
export class SpinnerColorsModule {}
