import { Component } from '@angular/core';

@Component({
  templateUrl: 'home-page.html'
})
export class SearchbarToolbar {
  defaultToolbarSearch: string = '';
  primaryToolbarSearch: string = '';
  darkToolbarSearch: string = '';
  lightToolbarSearch: string = '';
}
