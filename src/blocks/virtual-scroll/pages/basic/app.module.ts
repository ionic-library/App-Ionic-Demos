import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, NavController } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class VirtualScrollBasicModule {
  items: any[] = [];
  webview: string = '';
  counter: number = 0;

  constructor(public navCtrl: NavController) {}

  addItems() {
    if (this.items.length === 0) {
      for (var i = 0; i < 200; i++) {
        this.addItem();
      }
    }
  }

  headerFn(_record: any, index: number, _records: any[]) {
    if (index % 4 === 0) {
      return index + ' is divisible by 4';
    }
    return null;
  }

  pushPage() {
    this.navCtrl.push(VirtualScrollBasic);
  }

  addItem() {
    this.items.push({
      value: this.counter,
      someMethod: function() {
        return '!!';
      }
    });
    this.counter++;
  }

  addRandomItem() {
    const index = Math.floor(Math.random() * this.items.length);
    console.log('Adding to index: ', index);
    this.items.splice( index, 0, {
      value: Math.floor(Math.random() * 10000),
      someMethod: function() {
        return '!!';
      }
    });
  }

  changeItem() {
    const index = Math.floor(Math.random() * this.items.length);
    console.log('Change to index: ', index);
    this.items[index] = { value: Math.floor(Math.random() * 10000), someMethod: () => '!!' };
  }

  trackByFn(_index: number, item: any) {
    return item.value;
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class VirtualScrollBasicModule {
  root = VirtualScrollBasic;
}


@NgModule({
  declarations: [
    VirtualScrollBasic,
    VirtualScrollBasic
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(VirtualScrollBasic)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VirtualScrollBasic,
    VirtualScrollBasic
  ]
})
export class VirtualScrollBasicModule {}
