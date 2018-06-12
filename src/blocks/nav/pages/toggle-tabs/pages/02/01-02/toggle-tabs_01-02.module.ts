import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ToggleTabs020102 } from './tab-one-page-two';

@NgModule({
  imports: [
    IonicPageModule.forChild(ToggleTabs020102)
  ],
  declarations: [
    ToggleTabs020102
  ]
})
export class NavToggleTabsModule { }
