import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { TextareaPageOne } from './page-one';

@NgModule({
  declarations: [
    TextareaPageOne,
  ],
  imports: [
    IonicPageModule.forChild(TextareaPageOne),
  ],
  entryComponents: [
    TextareaPageOne,
  ]
})
export class TextareaPageOne {}
