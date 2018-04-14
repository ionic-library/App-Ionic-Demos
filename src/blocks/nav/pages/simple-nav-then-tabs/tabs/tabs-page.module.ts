import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsPage)
  ],
  declarations: [
    TabsPage
  ]
})
export class TabsPageModule { }
