import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { NavPushPop01 } from './first-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(NavPushPop01)
  ],
  declarations: [
    NavPushPop01
  ]
})
export class NavPushPop01Module { }
