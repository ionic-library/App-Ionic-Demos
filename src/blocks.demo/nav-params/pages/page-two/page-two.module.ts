import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { NavParamsPageTwo } from './page-two';

@NgModule({
  declarations: [
    NavParamsPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(NavParamsPageTwo),
  ],
  entryComponents: [
    NavParamsPageTwo,
  ]
})
export class NavParamsPageTwoModule {}
