import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { SimpleNavThenDefaultHistory01 } from './login-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(SimpleNavThenDefaultHistory01)
  ],
  declarations: [
    SimpleNavThenDefaultHistory01
  ]
})
export class NavSimpleNavThenDefaultHistoryModule { }
