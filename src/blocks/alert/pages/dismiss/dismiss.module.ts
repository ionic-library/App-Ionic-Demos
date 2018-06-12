import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { AlertDismiss } from "./dismiss";

@NgModule({
	declarations: [AlertDismiss],
	imports: [IonicPageModule.forChild(AlertDismiss)],
	entryComponents: [AlertDismiss]
})
export class AlertDismissModule {}
