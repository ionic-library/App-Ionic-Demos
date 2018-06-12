import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ChildNavs02 } from './fourth-page';

@NgModule({
  declarations: [
    ChildNavs02,
  ],
  imports: [
    IonicPageModule.forChild(ChildNavs02)
  ],
  entryComponents: [
    ChildNavs02,
  ]
})
export class NavChildNavsModule {}
