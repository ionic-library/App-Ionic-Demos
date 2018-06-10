import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ItemPageOne } from './page-one';

@NgModule({
  declarations: [
    ItemPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ItemPageOne),
  ],
  entryComponents: [
    ItemPageOne,
  ]
})
export class ItemPageOneModule {}
