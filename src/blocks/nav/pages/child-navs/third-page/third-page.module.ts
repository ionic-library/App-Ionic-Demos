import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ThirdPage } from './third-page';

@NgModule({
  declarations: [
    ThirdPage,
  ],
  imports: [
    IonicPageModule.forChild(ThirdPage)
  ],
  entryComponents: [
    ThirdPage,
  ]
})
export class ThirdPageModule {}
