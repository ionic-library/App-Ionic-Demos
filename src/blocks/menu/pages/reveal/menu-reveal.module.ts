import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Nav } from '../../../..';


@Component({templateUrl: 'page1.html'})
export class MenuRevealModule {}


@Component({
  templateUrl: 'main.html'
})
export class MenuRevealModule {
  @ViewChild(Nav) nav: Nav;

  rootView = MenuReveal;

  openPage(menu: any, page: any) {
    // close the menu when clicking a link from the menu
    menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

@NgModule({
  declarations: [
    MenuReveal,
    MenuReveal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MenuReveal)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuReveal,
    MenuReveal
  ]
})
export class MenuRevealModule {}
