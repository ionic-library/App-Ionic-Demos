import { NgModule }						from "@angular/core";
import { IonicPageModule }				from "ionic-angular";

import { SharedModule }					from "../../../../app/app.shared.modules";

import { AccordionList01 }				from "./accordion-list-01";

@NgModule({
	declarations: [AccordionList01],
	imports: [IonicPageModule.forChild(AccordionList01), SharedModule],
	exports: [AccordionList01]
})
export class AccordionList01Module {}
