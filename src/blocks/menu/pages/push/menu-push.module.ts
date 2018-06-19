import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertController, IonicApp, IonicModule, Nav } from '../../../..';


@Component({templateUrl: 'page1.html'})
export class MenuPushModule {}


@Component({
  templateUrl: 'main.html'
})
export class MenuPushModule {
  @ViewChild(Nav) nav: Nav;

  rootView = MenuPush;

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
    MenuPush,
    MenuPush
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MenuPush)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuPush,
    MenuPush
  ]
})
export class MenuPushModule {}
