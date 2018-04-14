import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NestedNavOnePageTwo } from './nested-nav-one-page-two';

@NgModule({
  imports: [
    IonicPageModule.forChild(NestedNavOnePageTwo)
  ],
  declarations: [
    NestedNavOnePageTwo
  ]
})
export class NestedNavOnePageTwoModule { }
