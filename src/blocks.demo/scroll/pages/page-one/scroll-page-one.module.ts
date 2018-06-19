import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ScrollPageOne } from './page-one';

@NgModule({
  declarations: [
    ScrollPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ScrollPageOne),
  ],
  entryComponents: [
    ScrollPageOne,
  ]
})
export class ScrollPageOneModule {}
