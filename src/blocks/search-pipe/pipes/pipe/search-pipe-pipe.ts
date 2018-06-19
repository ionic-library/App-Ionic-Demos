import { Injectable } 					from '@angular/core';
import { Pipe } 						from '@angular/core';

@Pipe({
	name: 'search',
	pure: true
})

@Injectable()
export class SearchPipePipe /* implements PipeTransform  */ {

	transform(list: any[], searchTerm: string): any[] {

		if (searchTerm) {
			console.log('SearchPipePipe.transform: ' + searchTerm)

			searchTerm = searchTerm.toUpperCase();
			return list.filter(item => {
				return item[0].fullname.toUpperCase().indexOf(searchTerm) !== -1
			});
		} else {
			console.log('SearchPipePipe.transform: NO search term')

			return list;
		}
	}

}
