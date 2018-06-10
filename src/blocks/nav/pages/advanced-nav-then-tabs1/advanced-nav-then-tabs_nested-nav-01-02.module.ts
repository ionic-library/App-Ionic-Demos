import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { AdvancedNavThenTabs01 } from './nested-nav-one-page-two';

@NgModule({
  imports: [
    IonicPageModule.forChild(AdvancedNavThenTabs01)
  ],
  declarations: [
    AdvancedNavThenTabs01
  ]
})
export class AdvancedNavThenTabs01Module { }
