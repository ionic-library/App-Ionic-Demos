import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NestedNavOnePageOne } from './nested-nav-one-page-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(NestedNavOnePageOne)
  ],
  declarations: [
    NestedNavOnePageOne
  ]
})
export class NestedNavOnePageOneModule { }
