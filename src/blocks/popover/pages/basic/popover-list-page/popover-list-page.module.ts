import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PopoverListPage } from './popover-list-page';

@NgModule({
  declarations: [
    PopoverListPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverListPage)
  ],
  entryComponents: [
    PopoverListPage,
  ]
})
export class PopoverBasicModule {}
