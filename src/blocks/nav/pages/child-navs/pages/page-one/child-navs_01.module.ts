import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ChildNavs01 } from './first-page';

@NgModule({
  declarations: [
    ChildNavs01,
  ],
  imports: [
    IonicPageModule.forChild(ChildNavs01)
  ],
  entryComponents: [
    ChildNavs01,
  ]
})
export class NavChildNavsModule {}
