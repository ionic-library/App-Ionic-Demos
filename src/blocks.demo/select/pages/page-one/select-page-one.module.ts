import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { SelectToolbarPageOne } from "./page-one";

@NgModule({
	declarations: [SelectToolbarPageOne],
	imports: [IonicPageModule.forChild(SelectToolbarPageOne)],
	entryComponents: [SelectToolbarPageOne]
})
export class SelectPageOneModule {}
