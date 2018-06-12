import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SimpleNestedNavs02 } from './second-nav';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNestedNavs02)
  ],
  declarations: [
    SimpleNestedNavs02
  ]
})
export class NavSimpleNestedNavsModule { }
