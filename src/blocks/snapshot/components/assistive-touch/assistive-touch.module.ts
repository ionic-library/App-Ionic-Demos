import { NgModule } from '@angular/core';
import { AssistiveTouchComponent } from './assistive-touch';
import { IonicPageModule } from "ionic-angular";
import { AssistivePopoverModule } from './assistive-popover/assistive-popover.module';

@NgModule({
  declarations: [
    AssistiveTouchComponent,
  ],
  imports: [
    IonicPageModule.forChild(AssistiveTouchComponent),
    AssistivePopoverModule
  ],
  exports: [
    AssistiveTouchComponent
  ]
})
export class SnapshotAssistiveTouchModule {
}
