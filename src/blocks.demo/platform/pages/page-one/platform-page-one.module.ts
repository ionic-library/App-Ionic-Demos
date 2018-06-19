import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PlatformPageOne } from './page-one';

@NgModule({
  declarations: [
    PlatformPageOne,
  ],
  imports: [
    IonicPageModule.forChild(PlatformPageOne),
  ],
  entryComponents: [
    PlatformPageOne,
  ]
})
export class PlatformPageOneModule {}
