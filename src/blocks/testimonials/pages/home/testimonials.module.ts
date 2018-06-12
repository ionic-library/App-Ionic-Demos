import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';

import { TestimonialsPage }				from './testimonials';

@NgModule({
	declarations: [
		TestimonialsPage,
	],
	imports: [
		IonicPageModule.forChild(TestimonialsPage),
	],
	exports: [
		TestimonialsPage
	]
})

export class TestimonialsHomeModule { }
