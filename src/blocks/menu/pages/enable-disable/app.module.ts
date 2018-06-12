import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App, IonicApp, IonicModule, MenuController, Nav } from '../../../..';


@Component({
  templateUrl: 'page1.html'
})
export class MenuEnableDisableModule {
}

@Component({
  templateUrl: 'page2.html'
})
export class MenuEnableDisableModule {
}


@Component({
  templateUrl: 'main.html'
})
export class MenuEnableDisableModule {
  @ViewChild(Nav) nav: Nav;

  activeMenu: string;
  page1 = MenuEnableDisable;
  page2 = MenuEnableDisable;
  rootPage = MenuEnableDisable;

  constructor(public app: App, public menuCtrl: MenuController) {
    this.menu1Active();
  }

  openPage(p: any) {
    // Get the <ion-nav> by id
    this.nav.setRoot(p);
  }

  menu1Active() {
    this.menuCtrl.enable(true, 'menu1');
  }
  menu2Active() {
    this.menuCtrl.enable(true, 'menu2');
  }
  menu3Active() {
    this.menuCtrl.enable(true, 'menu3');
  }
}

@NgModule({
  declarations: [
    MenuEnableDisable,
    MenuEnableDisable,
    MenuEnableDisable
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MenuEnableDisable)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuEnableDisable,
    MenuEnableDisable,
    MenuEnableDisable
  ]
})
export class MenuEnableDisableModule {}
