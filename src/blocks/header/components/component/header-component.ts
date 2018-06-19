import { Component, Input } from '@angular/core';

@Component({
	selector: 'page-header-component',
	templateUrl: 'header-component.html'
})

export class HeaderComponent {
	@Input() value: String;
}
