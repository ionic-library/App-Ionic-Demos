import { NgModule }						from "@angular/core";
import { IonicModule }					from "ionic-angular";

import { ComponentsModule }				from "../app/app.shared.components.module";
import { PipesModule }					from "./app.shared.pipes.module";
import { DirectivesModule }				from './app.shared.directives.module';

@NgModule({
	declarations: [DirectivesModule],
	imports: [IonicModule, PipesModule, ComponentsModule],
	exports: [ComponentsModule, PipesModule]
})
export class SharedModule {}
