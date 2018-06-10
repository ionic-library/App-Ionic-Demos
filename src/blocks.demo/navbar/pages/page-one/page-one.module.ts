import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { NavbarPageOne } from './page-one';

@NgModule({
  declarations: [
    NavbarPageOne,
  ],
  imports: [
    IonicPageModule.forChild(NavbarPageOne),
  ],
  entryComponents: [
    NavbarPageOne,
  ]
})
export class NavbarPageOneModule {}
