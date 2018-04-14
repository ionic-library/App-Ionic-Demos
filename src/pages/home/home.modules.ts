import { NgModule }                     from '@angular/core';
import { IonicPageModule }              from 'ionic-angular';

import { HomePage }                     from './home';
import { HeaderComponentModule }        from '../../components/header/header.module';

// import { ProductsProvider } from '../../providers/products/products';

@NgModule({
  declarations: [
    HomePage 
  ],
  imports: [
    HeaderComponentModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ],
  providers: [
    // ProductsProvider
  ]
})
export class HomePageModule {}
