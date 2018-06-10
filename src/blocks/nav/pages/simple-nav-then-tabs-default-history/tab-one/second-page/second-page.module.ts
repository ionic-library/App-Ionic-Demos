import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SecondPage } from './second-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SecondPage)
  ],
  declarations: [
    SecondPage
  ]
})
export class SecondPageModule { }
