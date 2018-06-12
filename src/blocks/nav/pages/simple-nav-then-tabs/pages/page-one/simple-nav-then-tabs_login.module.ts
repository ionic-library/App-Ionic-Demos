import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SimpleNavThenTabs01 } from './login-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNavThenTabs01)
  ],
  declarations: [
    SimpleNavThenTabs01
  ]
})
export class NavSimpleNavThenTabsModule { }
