import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SimpleNestedNavs01 } from './first-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNestedNavs01)
  ],
  declarations: [
    SimpleNestedNavs01
  ]
})
export class NavSimpleNestedNavsModule { }
