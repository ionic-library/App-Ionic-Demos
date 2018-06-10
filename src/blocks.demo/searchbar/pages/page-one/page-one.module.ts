import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { SearchbarPageOne } from './page-one';

@NgModule({
  declarations: [
    SearchbarPageOne,
  ],
  imports: [
    IonicPageModule.forChild(SearchbarPageOne),
  ],
  entryComponents: [
    SearchbarPageOne,
  ]
})
export class SearchbarPageOne {}
