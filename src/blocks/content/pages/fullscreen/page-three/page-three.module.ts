import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PageThree } from './page-three';

@NgModule({
  declarations: [
    PageThree,
  ],
  imports: [
    IonicPageModule.forChild(PageThree)
  ]
})
export class PageThreeModule {}
