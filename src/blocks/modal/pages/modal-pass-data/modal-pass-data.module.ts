import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ModalPassData } from './modal-pass-data';
import { SomeComponentProvider } from './provider';

@NgModule({
  declarations: [
    ModalPassData,
  ],
  imports: [
    IonicPageModule.forChild(ModalPassData)
  ],
  providers: [
    SomeComponentProvider
  ]
})
export class ModalModalPassDataModule {}
