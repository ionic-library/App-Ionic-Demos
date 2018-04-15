import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChildNavs03 } from './landing-page';

@NgModule({
  declarations: [
    ChildNavs03,
  ],
  imports: [
    IonicPageModule.forChild(ChildNavs03)
  ],
  entryComponents: [
    ChildNavs03,
  ]
})
export class ChildNavs03Module {}
