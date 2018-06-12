import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class ListStickyModule {
  groups: any[] = [];

  constructor() {
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (var i = 0; i < letters.length; i++) {
      var group: any[] = [];

      for (var j = 0; j < 10; j++) {
        group.push({
          title: letters[i] + j
        });
      }

      this.groups.push({
        title: letters[i].toUpperCase(),
        items: group
      });
    }
  }
}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class ListStickyModule {
  rootPage = ListSticky;
}

@NgModule({
  declarations: [
    ListSticky,
    ListSticky
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ListSticky)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListSticky,
    ListSticky
  ]
})
export class ListStickyModule {}
