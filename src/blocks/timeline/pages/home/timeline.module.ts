import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { SharedModule }					from '../../../app/app.shared.modules';

import { TimelinePage }					from './timeline';


@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
    SharedModule
  ],
  exports: [
    TimelinePage
  ]
})

export class TimelineHomeModule { }
