import { Component } from '@angular/core';
import { WeightEntry, WEIGHTS } from '../../models/model-one/weight-data-mock';

@Component({
	selector: 'weight-list',
	templateUrl: 'weight-list.html'
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
