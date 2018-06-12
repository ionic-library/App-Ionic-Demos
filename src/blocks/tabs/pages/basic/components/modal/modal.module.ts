import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { MyModal } from './modal';

@NgModule({
  declarations: [
    MyModal,
  ],
  imports: [
    IonicPageModule.forChild(MyModal)
  ],
  entryComponents: [
    MyModal,
  ]
})
export class TabsBasicModule {}
