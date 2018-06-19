import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TabsPageOne } from './page-one';

@NgModule({
  declarations: [
    TabsPageOne,
  ],
  imports: [
    IonicPageModule.forChild(TabsPageOne),
  ],
  entryComponents: [
    TabsPageOne,
  ]
})
export class TabsPageOneModule {}
