import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ModalModalPage } from './modal-page';

@NgModule({
  declarations: [
    ModalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalModalPage),
  ],
  entryComponents: [
    ModalModalPage,
  ]
})
export class ModalModalPageModule {}
