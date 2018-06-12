import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TabOne } from './tab-one';

@NgModule({
  declarations: [
    TabOne,
  ],
  imports: [
    IonicPageModule.forChild(TabOne)
  ]
})
export class TabsBasicModule {}
