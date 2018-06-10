import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ToastPageOne } from './page-one';

@NgModule({
  declarations: [
    ToastPageOne,
  ],
  imports: [
    IonicPageModule.forChild(ToastPageOne),
  ],
  entryComponents: [
    ToastPageOne,
  ]
})
export class ToastPageOne {}
