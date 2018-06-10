import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SimpleNestedNavs03 } from './second-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNestedNavs03)
  ],
  declarations: [
    SimpleNestedNavs03
  ]
})
export class SimpleNestedNavs03Module { }
