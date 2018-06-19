import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ChildNavs04 } from './second-page';

@NgModule({
  declarations: [
    ChildNavs04,
  ],
  imports: [
    IonicPageModule.forChild(ChildNavs04)
  ],
  entryComponents: [
    ChildNavs04,
  ]
})
export class NavChildNavs04Module {}
