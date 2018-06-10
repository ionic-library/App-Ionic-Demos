import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { MenuPageOne } from './page-one';

@NgModule({
  declarations: [
    MenuPageOne,
  ],
  imports: [
    IonicPageModule.forChild(MenuPageOne),
  ],
  entryComponents: [
    MenuPageOne,
  ]
})
export class MenuPageOneModule {}
