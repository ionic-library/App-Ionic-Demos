import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleNav01 } from './first-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNav01)
  ],
  declarations: [
    SimpleNav01
  ]
})
export class SimpleNav01Module { }
