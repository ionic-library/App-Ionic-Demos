import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { TabsOneTabOnePageTwo } from './tab-one-page-two';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsOneTabOnePageTwo)
  ],
  declarations: [
    TabsOneTabOnePageTwo
  ]
})
export class NavAdvancedTabsDefaultHistoryModule { }
