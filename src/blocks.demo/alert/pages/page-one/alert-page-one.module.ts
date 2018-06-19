import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { AlertPageOne } from "./page-one";

@NgModule({
	declarations: [AlertPageOne],
	imports: [IonicPageModule.forChild(AlertPageOne)],
	entryComponents: [AlertPageOne]
})
export class AlertPageOneModule {}
