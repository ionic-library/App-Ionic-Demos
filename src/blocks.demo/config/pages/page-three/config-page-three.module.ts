import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ConfigPageThree } from './page-three';

@NgModule({
  declarations: [
    ConfigPageThree,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPageThree),
  ],
  entryComponents: [
    ConfigPageThree,
  ]
})
export class ConfigPageThreeModule {}
