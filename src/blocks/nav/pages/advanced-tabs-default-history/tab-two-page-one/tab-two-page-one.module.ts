import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { TabsOneTabTwoPageOne } from './tab-two-page-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsOneTabTwoPageOne)
  ],
  declarations: [
    TabsOneTabTwoPageOne
  ]
})
export class TabsOneTabTwoPageOneModule { }
