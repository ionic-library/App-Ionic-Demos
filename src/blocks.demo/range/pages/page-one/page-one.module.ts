import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { RangePageOne } from './page-one';

@NgModule({
  declarations: [
    RangePageOne,
  ],
  imports: [
    IonicPageModule.forChild(RangePageOne),
  ],
  entryComponents: [
    RangePageOne,
  ]
})
export class RangePageOneModule {}
