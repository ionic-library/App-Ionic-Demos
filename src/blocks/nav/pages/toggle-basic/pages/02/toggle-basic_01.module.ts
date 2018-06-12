import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ToggleBasic02 } from './first-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(ToggleBasic02)
  ],
  declarations: [
    ToggleBasic02
  ]
})
export class NavToggleBasicModule { }
