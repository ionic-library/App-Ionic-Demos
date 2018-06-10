import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { DateTimePageOne } from './page-one';

@NgModule({
  declarations: [
    DateTimePageOne,
  ],
  imports: [
    IonicPageModule.forChild(DateTimePageOne),
  ],
  entryComponents: [
    DateTimePageOne,
  ]
})
export class DatetimePageOneModule {}
