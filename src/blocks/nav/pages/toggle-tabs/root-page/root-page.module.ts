import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RootPage } from './root-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(RootPage)
  ],
  declarations: [
    RootPage
  ]
})
export class RootPageModule { }
