import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { SegmentPageOne } from './page-one';

@NgModule({
  declarations: [
    SegmentPageOne,
  ],
  imports: [
    IonicPageModule.forChild(SegmentPageOne),
  ],
  entryComponents: [
    SegmentPageOne,
  ]
})
export class SegmentPageOne {}
