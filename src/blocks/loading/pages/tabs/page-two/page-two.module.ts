import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { PageTwo } from './page-two';

@NgModule({
  declarations: [
    PageTwo,
  ],
  imports: [
    IonicPageModule.forChild(PageTwo)
  ],
})
export class PageTwoModule {}
