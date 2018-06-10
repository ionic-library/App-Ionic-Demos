import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { NavigationPageOne } from './page-one';

@NgModule({
  declarations: [
    NavigationPageOne,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPageOne),
  ],
  entryComponents: [
    NavigationPageOne,
  ]
})
export class NavigationPageOneModule {}
