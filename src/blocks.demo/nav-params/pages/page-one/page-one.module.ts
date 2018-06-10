import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { NavParamsPageOne } from './page-one';

@NgModule({
  declarations: [
    NavParamsPageOne,
  ],
  imports: [
    IonicPageModule.forChild(NavParamsPageOne),
  ],
  entryComponents: [
    NavParamsPageOne,
  ]
})
export class NavParamsPageOneModule {}
