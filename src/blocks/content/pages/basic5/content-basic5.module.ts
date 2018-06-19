import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PageFive } from './page-five';

@NgModule({
  declarations: [
    PageFive,
  ],
  imports: [
    IonicPageModule.forChild(PageFive)
  ]
})
export class ContentBasic5Module {}
