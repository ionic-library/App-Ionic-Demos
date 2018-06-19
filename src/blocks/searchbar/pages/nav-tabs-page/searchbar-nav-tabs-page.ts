import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

import { SearchPage } from '../search-page/search-page';

@IonicPage()
@Component({
  templateUrl: 'searchbar-nav-tabs-page.html'
})
export class SearchbarNavTabsPage {
  mainPage = 'MainPage';
  searchPage = SearchPage;
}
