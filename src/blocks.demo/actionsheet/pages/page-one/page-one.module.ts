import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ActionsheetPageOne } from './page-one';

@NgModule({
  declarations: [
    ActionsheetPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ActionsheetPageOne),
  ],
  entryComponents: [
    ActionsheetPageOne,
  ]
})
export class ActionsheetPageOneModule {}
