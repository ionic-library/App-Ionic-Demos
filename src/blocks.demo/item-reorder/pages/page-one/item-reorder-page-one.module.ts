import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ItemReorderPageOne } from './page-one';

@NgModule({
  declarations: [
    ItemReorderPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ItemReorderPageOne),
  ],
  entryComponents: [
    ItemReorderPageOne,
  ]
})
export class ItemReorderPageOneModule {}
