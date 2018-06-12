import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  templateUrl: 'main.html'
})
export class VirtualScrollInfiniteScrollModule {
  counter = 1;
  items: any[] = [];
  enabled = true;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.addItem();
    }
  }

  addItem() {
    this.items.push(this.counter);
    this.counter++;
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return getAsyncData().then(newData => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push(this.items.length);
      }

      console.log('Finished receiving data, async operation complete');

      if (this.items.length > 900) {
        this.enabled = false;
      }
    });
  }

}

function getAsyncData(): Promise<any[]> {
  // async return mock data
  return new Promise(resolve => {

    setTimeout(() => {
      let data: number[] = [];
      for (var i = 0; i < 30; i++) {
        data.push(i);
      }

      resolve(data);
    }, 500);

  });
}



@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class VirtualScrollInfiniteScrollModule {
  root = VirtualScrollInfiniteScroll;
}


@NgModule({
  declarations: [
    VirtualScrollInfiniteScroll,
    VirtualScrollInfiniteScroll
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(VirtualScrollInfiniteScroll)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VirtualScrollInfiniteScroll,
    VirtualScrollInfiniteScroll
  ]
})
export class VirtualScrollInfiniteScrollModule { }
