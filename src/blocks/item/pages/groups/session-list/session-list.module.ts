import { NgModule } from '@angular/core';
import { SessionList } from './session-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SessionList
  ],
  imports: [
    IonicPageModule.forChild(SessionList)
  ]
})
export class SessionListModule {}
