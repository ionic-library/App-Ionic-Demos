import { NgModule }						from '@angular/core';
import { SampleDirective }				from './sample/directive';

@NgModule({
	declarations: [
		SampleDirective
	],
	imports: [],
	exports: [
		SampleDirective
	]
})
export class DirectivesModule { }
