import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TabsPage } from './tabs-page';
import { PageOneModule } from '../page-one/page-one.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    PageOneModule
  ]
})
export class ContentFullscreenModule {}
