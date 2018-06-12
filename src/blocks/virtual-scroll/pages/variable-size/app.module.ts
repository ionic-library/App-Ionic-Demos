import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class VirtualScrollVariableSizeModule {
  items: any[] = [];

  constructor() {

    for (var i = 0; i < 5000; i++) {

      this.items.push({
        isHeader: ((i % 10) === 0),
        fontSize: Math.floor((Math.random() * 32) + 16) + 'px',
        item: i
      });

    }
  }

  headerFn(_record: any, recordIndex: number) {
    if (recordIndex > 0 && recordIndex % 100 === 0) {
      return recordIndex;
    }
    return null;
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>',
})
export class VirtualScrollVariableSizeModule {
  root = VirtualScrollVariableSize;
}


@NgModule({
  declarations: [
    VirtualScrollVariableSize,
    VirtualScrollVariableSize
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(VirtualScrollVariableSize)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VirtualScrollVariableSize,
    VirtualScrollVariableSize
  ]
})
export class VirtualScrollVariableSizeModule {}
