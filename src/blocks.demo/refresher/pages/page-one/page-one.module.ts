import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { RefresherPageOne } from './page-one';
import { InfiniteScrollPageOne } from './provider';

@NgModule({
  declarations: [
    RefresherPageOne,
  ],
  imports: [
    IonicPageModule.forChild(RefresherPageOne),
  ],
  entryComponents: [
    RefresherPageOne,
  ],
  providers: [
    InfiniteScrollPageOne
  ]
})
export class RefresherPageOne {}
