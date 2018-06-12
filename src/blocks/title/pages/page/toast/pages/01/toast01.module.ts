import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { Toast01Page } from "./toast01";

@NgModule({
	declarations: [Toast01Page],
	imports: [IonicPageModule.forChild(Toast01Page)],
	entryComponents: [Toast01Page]
})
export class TitlePageModule {}
