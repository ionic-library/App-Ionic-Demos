import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ModalPageOne } from './page-one';

@NgModule({
  declarations: [
    ModalPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageOne),
  ],
  entryComponents: [
    ModalPageOne,
  ]
})
export class ModalPageOneModule {}
