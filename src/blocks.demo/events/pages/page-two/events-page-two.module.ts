import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { EventsPageTwo } from './page-two';

@NgModule({
  declarations: [
    EventsPageTwo,
  ],
  imports: [
    IonicPageModule.forChild(EventsPageTwo),
  ],
  entryComponents: [
    EventsPageTwo,
  ]
})
export class EventsPageTwoModule {}
