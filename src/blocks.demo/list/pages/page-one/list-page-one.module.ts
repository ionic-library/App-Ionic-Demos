import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ListPageOne } from './page-one';

@NgModule({
  declarations: [
    ListPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ListPageOne),
  ],
  entryComponents: [
    ListPageOne,
  ]
})
export class ListPageOneModule {}
