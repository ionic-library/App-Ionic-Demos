import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TabTwo } from './tab-two';

@NgModule({
  declarations: [
    TabTwo,
  ],
  imports: [
    IonicPageModule.forChild(TabTwo)
  ]
})
export class TabsBasicModule {}
