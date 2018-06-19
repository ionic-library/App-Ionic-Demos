import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class SpinnerBasicModule {
  paused: boolean = false;

  toggleState() {
    this.paused = !this.paused;
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class SpinnerBasicModule {
  root = SpinnerBasic;
}

@NgModule({
  declarations: [
    SpinnerBasic,
    SpinnerBasic
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SpinnerBasic)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpinnerBasic,
    SpinnerBasic
  ]
})
export class SpinnerBasicModule {}
