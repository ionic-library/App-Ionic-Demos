import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { RootPage } from './root-page';
import { MyImgModule } from '../my-img/my-img.module';

@NgModule({
  declarations: [
    RootPage,
  ],
  imports: [
    IonicPageModule.forChild(RootPage),
    MyImgModule
  ]
})
export class ImgBasicModule {}
