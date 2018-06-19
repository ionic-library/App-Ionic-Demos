import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-side-menu-page-native',
  templateUrl: 'side-menu-page-native.html',
})
export class SideMenuPageNative {

  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'SideMenuPageNative';

    this.items = [
      {
        title: 'Barcode scan',
        page: 'BarcodeScannerPage'
      },
      {
        title: 'Credit card scanning',
        page: 'CreditCardScanPage'
      },
      {
        title: 'Get image from camera/gallery',
        page: 'GetImagePage'
      },
      {
        title: 'Google Maps',
        page: 'NativeGoogleMapsPage'
      },
      {
        title: 'Runtime permissions',
        page: 'RuntimePermissionsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}