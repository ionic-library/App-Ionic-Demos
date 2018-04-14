import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(LandingPage)
  ],
  declarations: [
    LandingPage
  ]
})
export class LandingPageModule { }
