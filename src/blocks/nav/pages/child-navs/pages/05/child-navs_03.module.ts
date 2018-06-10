import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ChildNavs05 } from './third-page';

@NgModule({
  declarations: [
    ChildNavs05,
  ],
  imports: [
    IonicPageModule.forChild(ChildNavs05)
  ],
  entryComponents: [
    ChildNavs05,
  ]
})
export class ChildNavs05Module {}
