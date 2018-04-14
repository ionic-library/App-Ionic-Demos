import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondNav } from './second-nav';

@NgModule({
  imports: [
    IonicPageModule.forChild(SecondNav)
  ],
  declarations: [
    SecondNav
  ]
})
export class SecondNavModule { }
