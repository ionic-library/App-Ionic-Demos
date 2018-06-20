import { Pipe } from "@angular/core";

@Pipe({
	name: "initial"
})
export class InitialPipe /* implements PipeTransform  */ {
	transform(value: string, ...args) {
		return value.charAt(0);
	}
}
