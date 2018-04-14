import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AccordionListComponent } from './component/accordion-list';

export const components = [
	AccordionListComponent,
];

@NgModule({
	declarations: [AccordionListComponent],
	imports: [IonicModule],
	exports: [AccordionListComponent ]
})
export class AccordionListComponentsModule { }
