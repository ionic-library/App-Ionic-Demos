import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsTwoTabOnePageOne } from './tab-one-page-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsTwoTabOnePageOne)
  ],
  declarations: [
    TabsTwoTabOnePageOne
  ]
})
export class TabsTwoTabOnePageOneModule { }
