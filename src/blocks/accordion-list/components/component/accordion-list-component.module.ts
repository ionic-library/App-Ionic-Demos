import { NgModule }						from "@angular/core";
import { IonicPageModule }				from "ionic-angular";

import { SharedModule }					from "../../../../app/app.shared.modules";

import { AccordionListComponent }		from "./accordion-list-component";

@NgModule({
	declarations: [AccordionListComponent],
	imports: [IonicPageModule.forChild(AccordionListComponent), SharedModule],
	exports: [AccordionListComponent]
})
export class AccordionListComponentModule {}
