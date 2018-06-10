import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { FabPageOne } from './page-one';

@NgModule({
  declarations: [
    FabPageOne,
  ],
  imports: [
    IonicPageModule.forChild(FabPageOne),
  ],
  entryComponents: [
    FabPageOne,
  ]
})
export class FabPageOneModule {}
