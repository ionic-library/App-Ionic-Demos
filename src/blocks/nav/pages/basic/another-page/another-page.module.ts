import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnotherPage } from './another-page';


@NgModule({
  imports: [
    IonicPageModule.forChild(AnotherPage)
  ],
  declarations: [
    AnotherPage
  ],
  entryComponents: [
    AnotherPage,
  ]
})
export class AnotherPageModule { }
