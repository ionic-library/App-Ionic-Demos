import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageOne } from './page-one';

@NgModule({
  imports: [
    IonicPageModule.forChild(PageOne)
  ],
  declarations: [
    PageOne
  ],
})
export class PageOneModule { }
