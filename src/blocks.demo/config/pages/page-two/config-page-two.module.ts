import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ConfigPageTwo } from './page-two';

@NgModule({
  declarations: [
    ConfigPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPageTwo),
  ],
  entryComponents: [
    ConfigPageTwo,
  ]
})
export class ConfigPageTwoModule {}
