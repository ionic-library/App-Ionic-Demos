import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TitlePageOne } from './page-one';

@NgModule({
  declarations: [
    TitlePageOne,
  ],
  imports: [
    IonicPageModule.forChild(TitlePageOne),
  ],
  entryComponents: [
    TitlePageOne,
  ]
})
export class TitlePageOneModule {}
