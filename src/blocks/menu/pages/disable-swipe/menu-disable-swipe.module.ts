import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, MenuController } from '../../../..';


@Component({
  templateUrl: 'page1.html'
})
export class MenuDisableSwipeModule {
  leftMenuSwipeEnabled: boolean = true;
  rightMenuSwipeEnabled: boolean = false;

  constructor(public menu: MenuController) {}

  toggleLeftMenuSwipeable() {
    this.leftMenuSwipeEnabled = !this.leftMenuSwipeEnabled;

    this.menu.swipeEnable(this.leftMenuSwipeEnabled, 'left');
  }

  toggleRightMenuSwipeable() {
    this.rightMenuSwipeEnabled = !this.rightMenuSwipeEnabled;

    this.menu.swipeEnable(this.rightMenuSwipeEnabled, 'right');
  }
}


@Component({
  templateUrl: 'main.html'
})
export class MenuDisableSwipeModule {
  root = MenuDisableSwipe;
}

@NgModule({
  declarations: [
    MenuDisableSwipe,
    MenuDisableSwipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MenuDisableSwipe)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuDisableSwipe,
    MenuDisableSwipe
  ]
})
export class MenuDisableSwipeModule {}
