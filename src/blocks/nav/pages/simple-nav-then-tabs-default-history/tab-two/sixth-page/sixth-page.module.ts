import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SixthPage } from './sixth-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SixthPage)
  ],
  declarations: [
    SixthPage
  ]
})
export class NavSimpleNavThenTabsDefaultHistoryModule { }
