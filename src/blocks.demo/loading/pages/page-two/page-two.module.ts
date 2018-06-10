import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { LoadingPageTwo } from './page-two';

@NgModule({
  declarations: [
    LoadingPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(LoadingPageTwo),
  ],
  entryComponents: [
    LoadingPageTwo,
  ]
})
export class LoadingPageTwoModule {}
