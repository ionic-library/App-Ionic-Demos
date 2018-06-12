import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { TabsTwoTabOnePageThree } from './tab-one-page-three';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsTwoTabOnePageThree)
  ],
  declarations: [
    TabsTwoTabOnePageThree
  ]
})
export class NavAdvancedTabsDefaultHistoryModule { }
