import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ItemSlidingPageOne } from './page-one';

@NgModule({
  declarations: [
    ItemSlidingPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ItemSlidingPageOne),
  ],
  entryComponents: [
    ItemSlidingPageOne,
  ]
})
export class ItemSlidingPageOneModule {}
