import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabThree } from './tab-three';

@NgModule({
  declarations: [
    TabThree,
  ],
  imports: [
    IonicPageModule.forChild(TabThree)
  ]
})
export class TabThreeModule {}
