import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ThirdPage } from './third-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(ThirdPage)
  ],
  declarations: [
    ThirdPage
  ]
})
export class NavSimpleNavThenTabsDefaultHistoryModule { }
