import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TogglePageOne } from './page-one';

@NgModule({
  declarations: [
    TogglePageOne,
  ],
  imports: [
    IonicPageModule.forChild(TogglePageOne),
  ],
  entryComponents: [
    TogglePageOne,
  ]
})
export class TogglePageOne {}
