import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { LabelPageOne } from './page-one';

@NgModule({
  declarations: [
    LabelPageOne,
  ],
  imports: [
    IonicPageModule.forChild(LabelPageOne),
  ],
  entryComponents: [
    LabelPageOne,
  ]
})
export class LabelPageOneModule {}
