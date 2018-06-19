import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { InputPageOne } from './page-one';

@NgModule({
  declarations: [
    InputPageOne,
  ],
  imports: [
    IonicPageModule.forChild(InputPageOne),
  ],
  entryComponents: [
    InputPageOne,
  ]
})
export class InputPageOneModule {}
