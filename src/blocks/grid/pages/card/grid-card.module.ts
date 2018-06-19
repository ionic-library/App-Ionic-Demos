import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class GridCardModule {
  items: any = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }
}


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class GridCardModule {
  rootPage = GridCard;
}

@NgModule({
  declarations: [
    GridCard,
    GridCard
  ],
  imports: [
    IonicModule.forRoot(GridCard)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GridCard,
    GridCard
  ]
})
export class GridCardModule {}
