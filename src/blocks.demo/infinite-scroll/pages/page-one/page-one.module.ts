import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { InfiniteScrollPageOne } from './page-one';
import { InfiniteScrollPageOne } from './provider';

@NgModule({
  declarations: [
    InfiniteScrollPageOne,
  ],
  imports: [
    IonicPageModule.forChild(InfiniteScrollPageOne),
  ],
  entryComponents: [
    InfiniteScrollPageOne,
  ],
  providers: [
    InfiniteScrollPageOne
  ]
})
export class InfiniteScrollPageOneModule {}
