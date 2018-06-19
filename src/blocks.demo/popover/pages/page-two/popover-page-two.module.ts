import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PopoverPageTwo } from './page-two';

@NgModule({
  declarations: [
    PopoverPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPageTwo),
  ],
  entryComponents: [
    PopoverPageTwo,
  ]
})
export class PopoverPageTwoModule {}
