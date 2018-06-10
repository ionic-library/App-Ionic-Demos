import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ConfigPageOne } from './page-one';

@NgModule({
  declarations: [
    ConfigPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPageOne),
  ],
  entryComponents: [
    ConfigPageOne,
  ]
})
export class ConfigPageOne {}
