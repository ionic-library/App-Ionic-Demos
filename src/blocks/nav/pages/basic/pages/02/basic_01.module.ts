import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { Basic02 } from './first-page';

import { MyCmpTest } from './my-component';
import { MyCmpTest2 } from './my-component-two';

@NgModule({
  imports: [
    IonicPageModule.forChild(Basic02)
  ],
  declarations: [
    Basic02,
    MyCmpTest,
    MyCmpTest2
  ]
})
export class Basic02Module { }
