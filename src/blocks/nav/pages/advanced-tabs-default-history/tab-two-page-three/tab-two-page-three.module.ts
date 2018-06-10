import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { TabsOneTabTwoPageThree } from './tab-two-page-three';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsOneTabTwoPageThree)
  ],
  declarations: [
    TabsOneTabTwoPageThree
  ]
})
export class TabsOneTabTwoPageThreeModule { }
