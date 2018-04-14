import { Pipe, PipeTransform }			from '@angular/core';

import { SwapiProvider }				from '../../../blocks/swapi/provider/swapi';

@Pipe({
	name: 'species',
})
export class SpeciesPipe implements PipeTransform {
	constructor(public swapi: SwapiProvider) { }
	transform(url, ...args) {
		return this.swapi.getSpecie(url).subscribe(data => {
			return data.name;
		});
	}
}
