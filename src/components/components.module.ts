import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Timer } from '../blocks/countdown/component/timer';
import { TimerProgress } from '../blocks/timer-progress/components/01/timer-progress';
import { ExpandableHeader } from '../blocks/expandable-header/components/component/expandable-header';
import { FlashCardComponent } from '../blocks/flash-card/components/component/flash-card';
import { AccordionListComponent } from '../blocks/accordion-list/component/accordion-list';
import { TimelineComponentModule } from '../blocks/timeline/components/component/timeline.module';

export const components = [
	Timer,
	TimerProgress,
	ExpandableHeader,
	FlashCardComponent,
	AccordionListComponent,
];

@NgModule({
	declarations: [components],
	imports: [IonicModule],
	exports: [components, TimelineComponentModule]
})
export class ComponentsModule { }
