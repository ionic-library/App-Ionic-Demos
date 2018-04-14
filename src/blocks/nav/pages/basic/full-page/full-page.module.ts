import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullPage } from './full-page';


@NgModule({
  imports: [
    IonicPageModule.forChild(FullPage)
  ],
  declarations: [
    FullPage
  ],
  entryComponents: [
    FullPage,
  ]
})
export class FullPageModule { }
