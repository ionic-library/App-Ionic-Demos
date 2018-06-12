import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { Basic01 } from './another-page';


@NgModule({
  imports: [
    IonicPageModule.forChild(Basic01)
  ],
  declarations: [
    Basic01
  ],
  entryComponents: [
    Basic01,
  ]
})
export class NavBasicModule { }
