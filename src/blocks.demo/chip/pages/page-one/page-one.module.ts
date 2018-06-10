import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ChipPageOne } from './page-one';

@NgModule({
  declarations: [
    ChipPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ChipPageOne),
  ],
  entryComponents: [
    ChipPageOne,
  ]
})
export class ChipPageOneModule {}
