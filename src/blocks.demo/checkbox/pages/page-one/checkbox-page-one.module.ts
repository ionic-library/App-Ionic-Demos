import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { CheckboxPageOne } from './page-one';

@NgModule({
  declarations: [
    CheckboxPageOne,
  ],
  imports: [
    IonicPageModule.forChild(CheckboxPageOne),
  ],
  entryComponents: [
    CheckboxPageOne,
  ]
})
export class CheckboxPageOneModule {}
