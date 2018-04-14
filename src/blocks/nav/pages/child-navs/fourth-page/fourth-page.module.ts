import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FourthPage } from './fourth-page';

@NgModule({
  declarations: [
    FourthPage,
  ],
  imports: [
    IonicPageModule.forChild(FourthPage)
  ],
  entryComponents: [
    FourthPage,
  ]
})
export class FourthPageModule {}
