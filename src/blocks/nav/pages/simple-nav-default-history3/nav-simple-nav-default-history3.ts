import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "../../../../../..";

@IonicPage( /* { segment: 'paramOne/:paramOne/paramTwo/:paramTwo', defaultHistory: [ 'FirstPage' ] } */)
@Component({
	templateUrl: "nav-simple-nav-default-history3.html"
})
export class NavSimpleNavDefaultHistory3 {
	paramOne: string;
	paramTwo: string;
	constructor(public nav: NavController, public params: NavParams) {
		this.paramOne = this.params.data.paramOne;
		this.paramTwo = this.params.data.paramTwo;
	}
}
