import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { SlidesPageOne } from './page-one';

@NgModule({
  declarations: [
    SlidesPageOne,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPageOne),
  ],
  entryComponents: [
    SlidesPageOne,
  ]
})
export class SlidesPageOneModule {}
