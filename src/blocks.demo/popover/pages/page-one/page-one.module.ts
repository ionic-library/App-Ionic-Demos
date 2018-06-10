import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PopoverPageOne } from './page-one';

@NgModule({
  declarations: [
    PopoverPageOne,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPageOne),
  ],
  entryComponents: [
    PopoverPageOne,
  ]
})
export class PopoverPageOneModule {}
