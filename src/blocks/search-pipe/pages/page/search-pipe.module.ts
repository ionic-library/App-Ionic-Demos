import { NgModule }						from '@angular/core';
import { IonicPageModule } 				from 'ionic-angular';

import { PipesModule }					from '../../../pipes/pipes.module';

import { SearchPipePage }				from './search-pipe';

@NgModule({
	declarations: [
		PipesModule,
		SearchPipePage,
	],
	imports: [
		IonicPageModule.forChild(SearchPipePage),
	],
})
export class SearchPipePageModule { }
