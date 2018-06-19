import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { ItemImages }		from './item-images';

@NgModule({
  declarations: [
    ItemImages,
  ],
  imports: [
    IonicPageModule.forChild(ItemImages)
  ]
})
export class ItemImagesModule {}
