import { NgModule }						from "@angular/core";
import { IonicModule }					from "ionic-angular";

import { PipesModule }					from "../pipes/pipes.module";
import { ComponentsModule }				from "../app/app.shared.components.module";

import { DIRECTIVES }					from "./app.imports";

@NgModule({
	declarations: [DIRECTIVES],
	imports: [IonicModule, PipesModule, ComponentsModule],
	exports: [ComponentsModule, PipesModule]
})
export class SharedModule {}
