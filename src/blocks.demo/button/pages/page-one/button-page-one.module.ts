import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ButtonPageOne } from './page-one';

@NgModule({
  declarations: [
    ButtonPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ButtonPageOne),
  ],
  entryComponents: [
    ButtonPageOne,
  ]
})
export class ButtonPageOneModule {}
