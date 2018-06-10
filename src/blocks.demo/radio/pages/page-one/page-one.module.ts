import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { RadioPageOne } from './page-one';

@NgModule({
  declarations: [
    RadioPageOne,
  ],
  imports: [
    IonicPageModule.forChild(RadioPageOne),
  ],
  entryComponents: [
    RadioPageOne,
  ]
})
export class RadioPageOneModule {}
