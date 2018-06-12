import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { LoginPage } from './login-page';

@NgModule({
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
  declarations: [
    LoginPage
  ]
})
export class NavSimpleNavThenTabsDefaultHistoryModule { }
