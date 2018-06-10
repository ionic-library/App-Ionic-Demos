import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { EventsPageOne } from './page-one';

@NgModule({
  declarations: [
    EventsPageOne,
  ],
  imports: [
    IonicPageModule.forChild(EventsPageOne),
  ],
  entryComponents: [
    EventsPageOne,
  ]
})
export class EventsPageOneModule {}
