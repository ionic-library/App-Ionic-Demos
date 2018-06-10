import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

import { LoggerService } from '../blocks/logger/services/service/logger';

@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	logger: LoggerService;

	rootPage: any = 'HomePage';
	activePage = new Subject();

	placeholder = 'assets/img/avatar/logo-ionic-toolbox-3.png';
	chosenPicture: any;

	pages: Array<{ name: string, component: any, icon: string, active: boolean }>;

	menu = [
		{
			title: 'Splash', items: [
				{ name: 'Splash', component: 'SplashPage', icon: 'information-circle', active: false }
			]
		},
		{
			title: 'Data', items: [
				{ name: 'Mock SQLite Data', component: 'MockSQLitePageHome', icon: 'document', active: false },
				{ name: 'SQLite: Simple', component: 'DataPageHome', icon: 'cube', active: false },
				{ name: 'Rest API', component: 'RestAPIPageHome', icon: 'cloud', active: false },
				{ name: 'List: Simple with static Itemlist', component: 'ListSimpleStaticPageHome', icon: 'list', active: false },
				{ name: 'List: Custom with static Itemlist', component: 'ListCustomPage', icon: 'list', active: false },
				{ name: 'Timeline', component: 'TimelinePage', icon: 'clock', active: false }
			]
		},
		{
			title: 'Ionic', items: [
				{ name: 'Home', component: 'HomePage', active: true, icon: 'home' },
				{ name: 'Accordion List', component: 'AccordionListPage', active: false, icon: 'map' },
				{ name: 'Ionic Official Components', component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
				{ name: 'Ionic Native Features', component: 'IonicNativePage', active: false, icon: 'ionic' }
			]
		},
		{
			title: 'Others', items: [
				{ name: 'Login', component: 'LoginListPage', active: false, icon: 'archive' },
				{ name: 'Lists', component: 'ListPage', active: false, icon: 'body' },
				{ name: 'Miscellaneous', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
				{ name: 'Modal with Navigation', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
				{ name: 'Popup Fab', component: 'PopupFabPage', active: false, icon: 'map' },
				{ name: 'Popup Modal', component: 'PopupModalsPage', active: false, icon: 'basket' },
				{ name: 'Popup Menu', component: 'PopupMenuListPage', active: false, icon: 'beer' },
				{ name: 'Profile', component: 'ProfileListPage', active: false, icon: 'camera' },
				{ name: 'Side Menu', component: 'SideMenuPage', active: false, icon: 'bookmark' },
				{ name: 'Timeline', component: 'TimelinePage', active: false, icon: 'calendar' },
				{ name: 'Slides', component: 'SlidesPage', active: false, icon: 'contact' },
				{ name: 'Theming', component: 'ThemingPage', active: false, icon: 'power' }
			]
		}
	]

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public menuCtrl: MenuController,
		public loggerService: LoggerService
	) {
		this.logger = loggerService;
		this.logger.info('app.components: constructor')


		this.logger.info('app.components: check sidemenu structure');
		this.menu.forEach(menu => {
			menu.items.forEach(item => {
				console.log('menu: ' + menu.title + "/" + item.name + "," + item.icon)
			});

		});

		this.platform.ready().then(() => {

			this.logger.info('app.components: handle statubar and splashscreen')
			this.statusBar.styleLightContent();
			this.splashScreen.hide();

		});

		this.logger.info('app.components: subscribe to activepage')
		/*
		this.activePage.subscribe((selectedPage: any) => {
			this.pages.map(page => {
				page.active = page.name === selectedPage.name;
			});
		});
		*/
	}

	openPage(page) {
		this.logger.info('app.components: openPage ' + page.component)

		this.nav.setRoot(page.component);
		this.activePage.next(page);
	}
}
