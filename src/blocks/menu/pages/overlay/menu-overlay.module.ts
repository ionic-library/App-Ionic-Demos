import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertController, IonicApp, IonicModule, Nav } from '../../../..';


@Component({templateUrl: 'page1.html'})
export class MenuOverlayModule {}


@Component({
  templateUrl: 'main.html'
})
export class MenuOverlayModule {
  @ViewChild(Nav) nav: Nav;

  rootView = MenuOverlay;

  constructor(public alertCtrl: AlertController) { }

  openPage(menu: any, page: any) {
    // close the menu when clicking a link from the menu
    menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert example',
      buttons: ['Ok']
    });
    alert.present();
  }
}

@NgModule({
  declarations: [
    MenuOverlay,
    MenuOverlay
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MenuOverlay)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuOverlay,
    MenuOverlay
  ]
})
export class MenuOverlayModule {}
