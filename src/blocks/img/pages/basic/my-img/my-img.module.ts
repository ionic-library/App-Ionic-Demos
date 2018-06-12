import { NgModule } from '@angular/core';

import { IonicPageModule } from "ionic-angular";

import { MyImg } from './my-img';

@NgModule({
  declarations: [
    MyImg,
  ],
  exports: [
    MyImg
  ],
  imports: [
    IonicPageModule.forChild(MyImg)
  ]
})
export class ImgBasicModule {}
