import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { NavigationPageTwo } from './page-two';

@NgModule({
  declarations: [
    NavigationPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPageTwo),
  ],
  entryComponents: [
    NavigationPageTwo,
  ]
})
export class NavigationPageTwoModule {}
