import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { LoadingPageOne } from './page-one';

@NgModule({
  declarations: [
    LoadingPageOne,
  ],
  imports: [
    IonicPageModule.forChild(LoadingPageOne),
  ],
  entryComponents: [
    LoadingPageOne,
  ]
})
export class LoadingPageOneModule {}
