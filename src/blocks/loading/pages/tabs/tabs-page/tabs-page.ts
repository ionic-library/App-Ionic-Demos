import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

import { PageOne} from '../page-one/page-one';

@IonicPage()
@Component({
  templateUrl: 'tabs-page.html'
})
export class LoadingTabs {
 root1 = PageOne;
 root2 = 'PageTwo';
 root3 = PageOne;
}
