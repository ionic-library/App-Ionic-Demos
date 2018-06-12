import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class GridResponsiveModule {

}


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class GridResponsiveModule {
  rootPage = GridResponsive;
}

@NgModule({
  declarations: [
    GridResponsive,
    GridResponsive
  ],
  imports: [
    IonicModule.forRoot(GridResponsive)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GridResponsive,
    GridResponsive
  ]
})
export class GridResponsiveModule {}
