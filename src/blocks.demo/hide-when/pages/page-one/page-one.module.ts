import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { HideWhenPageOne } from './page-one';

@NgModule({
  declarations: [
    HideWhenPageOne,
  ],
  imports: [
    IonicPageModule.forChild(HideWhenPageOne),
  ],
  entryComponents: [
    HideWhenPageOne,
  ]
})
export class HideWhenPageOneModule {}
