import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RootPage } from './root-page';

@NgModule({
  declarations: [
    RootPage,
  ],
  imports: [
    IonicPageModule.forChild(RootPage),
  ]
})
export class RootPageModule {}
