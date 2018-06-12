import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ModalChatPage } from './modal-chat-page';

@NgModule({
  declarations: [
    ModalChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalChatPage)
  ]
})
export class TabsAdvancedModule {}
