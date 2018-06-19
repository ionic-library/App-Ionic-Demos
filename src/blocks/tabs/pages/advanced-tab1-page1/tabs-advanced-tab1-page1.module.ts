
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { Tab1Page1 } from './tab1-page1';


@NgModule({
  imports: [
    IonicPageModule.forChild(Tab1Page1)
  ],
  declarations: [
    Tab1Page1
  ],
  entryComponents: [
    Tab1Page1,
  ]
})
export class TabsAdvancedTab1Page1Module { }
