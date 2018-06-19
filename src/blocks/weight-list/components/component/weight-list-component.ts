import { Component } from '@angular/core';
import { WeightEntry, WEIGHTS } from '../../models/model-one/weight-data-mock';

@Component({
	selector: 'page-weight-list-component',
	templateUrl: 'weight-list-component.html'
})
export class WeightListComponent {

	weights: WeightEntry[];

	constructor() {
		this.weights = WEIGHTS;

		this.weights.forEach(element => {
			console.log(
				`
        date:  ${element.date}
        weight: ${element.weight}`
			);
		});
	}

}
