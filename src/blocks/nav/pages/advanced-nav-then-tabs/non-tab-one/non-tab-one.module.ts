import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonTabOne } from './non-tab-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(NonTabOne)
  ],
  declarations: [
    NonTabOne
  ]
})
export class NonTabOneModule { }
