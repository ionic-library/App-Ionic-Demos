import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { TabsOneTabOnePageOne } from './tab-one-page-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsOneTabOnePageOne)
  ],
  declarations: [
    TabsOneTabOnePageOne
  ]
})
export class NavTab1Page1Module { }
