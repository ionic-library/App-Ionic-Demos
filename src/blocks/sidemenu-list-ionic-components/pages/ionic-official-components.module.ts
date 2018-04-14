import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicOfficialComponentsPage } from './ionic-official-components';
import { AlertsPageModule } from '../../ionic-components-alert/page/alert.module';
import { ButtonsListPageModule } from '../../ionic-components-button/page/button.module';
import { CardListPageModule } from '../../ionic-components-card/card.module';


@NgModule({
	declarations: [
		IonicOfficialComponentsPage,
	],
	imports: [
		IonicPageModule.forChild(IonicOfficialComponentsPage),
		AlertsPageModule,
		ButtonsListPageModule,
		CardListPageModule
	],
	exports: [
		IonicOfficialComponentsPage
	]
})

export class IonicOfficialComponentsPageModule { }
