import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ShowWhenPageOne } from './page-one';

@NgModule({
  declarations: [
    ShowWhenPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ShowWhenPageOne),
  ],
  entryComponents: [
    ShowWhenPageOne,
  ]
})
export class ShowWhenPageOneModule {}
